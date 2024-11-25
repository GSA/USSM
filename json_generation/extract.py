import json
import os
import pandas as pd

def biz_life(df):
    unique_func_names = df['ServiceFunctionID and Name'].unique()
    all_func_jsons = []
    for name in unique_func_names:
        filt_df = df[df['ServiceFunctionID and Name'] == name]
        res = filt_df[['ServiceActivityID', 'ServiceActivityName', 'ServiceActivityDescription ']].to_dict(orient='records')
        if not filt_df.empty:
            id = filt_df['ServiceActivityID'].iloc[0]
            heading = '{}'.format(id).lower()
            for entry in res:
                entry['Identifier'] = entry.pop('ServiceActivityID', None)
                entry['Activity'] = entry.pop('ServiceActivityName', None)
                entry['Description'] = entry.pop('ServiceActivityDescription ', None)
            all_func_jsons.append({
                "type":heading,
                "data":res
                })
    final_json = {"Business_Lifecycle": all_func_jsons}    
    json_res = json.dumps(final_json,indent=4)
    return json_res


def parse_biz_life(df):
    lis = (df['Activity ID and Name'].to_list())
    ids = []
    acts = []
    for i in range(len(lis)):
        temp = lis[i]
        id = temp[0:temp.rindex('0')+1]
        activity = temp[temp.rindex('0')+2:]
        ids.append(id)
        acts.append(activity)
    descs = (df['Activity Description'].to_list())
    fin = []
    for i in range(len(ids)):
        temp = {
            "Identifier": ids[i],
            "Activity": acts[i],
            "Description": descs[i]
        }
        fin.append(temp)
    json_res = json.dumps(fin,indent=4)
    return json_res
        
 
    
def business_capabilities(df):
    df.columns = [col.replace('\n', ' ').strip() for col in df.columns]
    df = df.map(lambda x: str(x).strip() if pd.notna(x) else "")
    print(df.columns)
    unique_capability_id = df['Capability ID'].unique()
    all_func_jsons = []
    print('{} total capability IDs'.format(len(unique_capability_id)))  
    print(df['Service Function ID and Name'][0])
    for id in unique_capability_id:
        filt_df = df[df['Capability ID'] == id]
        res = filt_df[['Service Function ID and Name', 'Service Activity ID and Name', '(I)input (P)process (O)output', 
                    'Business Capability Statement', 
                    'Authoritative Reference']].to_dict(orient='records')
        if not filt_df.empty:
            for entry in res:
                entry = {key: str(value).replace('\n', ' ').strip() if value is not None else "" for key, value in entry.items()}
                if (id.lower() == 'adjusted' or id.lower()== 'new'):
                    continue
                entry['Capability ID'] = id.strip()
                entry['Function'] = entry.pop('Service Function ID and Name', '')[8:]
                entry['Activity Name'] = entry.pop('Service Activity ID and Name', '')[12:]
                entry['Input/Output/Process'] = entry.pop('(I)input (P)process (O)output', '')
                entry['Business Capability Statement'] = entry.pop('Business Capability Statement', '')
                entry['Authoritative Reference'] = entry.pop('Authoritative Reference', '')
                all_func_jsons.append(entry)
                                
    final_json = all_func_jsons
    json_res = json.dumps(final_json, indent=4)
    print('now, because of the filter, we have {} entries'.format(len(final_json)))
    return json_res

def standard_data_elements(df):
      json_out = df.to_json(orient='records')
      json_obj = json.loads(json_out)
      for record in json_obj:
          for key,value in record.items():
              if value is None:
                  record[key] = ""
      pretty_json = json.dumps(json_obj,indent=4)
      return pretty_json
          


def save_file(json_output, file_name):
    if (os.path.exists(file_name)):
        os.remove(file_name)
    with open(file_name,'w') as json_file:
        json_file.write(json_output)