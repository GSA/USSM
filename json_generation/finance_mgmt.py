import json
import os


def budget_exec(df):
    unique_func_names = df['Function Name'].unique()
    all_func_jsons = []
    for name in unique_func_names:
        filt_df = df[df['Function Name'] == name]
        res = filt_df[['Activity ID', 'Activity Name', 'Activity Description']].to_dict(orient='records')
        if not filt_df.empty:
            id = filt_df['Function ID'].iloc[0]
            heading = '{}'.format(id).lower()
            for entry in res:
                entry['Identifier'] = entry.pop('Activity ID', None)
                entry['Activity'] = entry.pop('Activity Name', None)
                entry['Description'] = entry.pop('Activity Description', None)
            all_func_jsons.append({
                "type":heading,
                "data":res
                })
    final_json = {"Business_Lifecycle": all_func_jsons}    
    json_res = json.dumps(final_json,indent=4)
    return json_res


def business_capabilities(df):
    unique_capability_id = df['Capability ID'].unique()
    all_func_jsons = []
    print('{} total capability IDs'.format(len(unique_capability_id)))
    for id in unique_capability_id:
        filt_df = df[df['Capability ID'] == id]
        res = filt_df[['Function ID and Name', 'Activity ID and Name', 'I-Input\nP-Process\nO-Output', 'Business Capability Statement\n [Federal Financial Management System Requirement (FFMSR)]', 'Authoritative Reference']].to_dict(orient='records')
        if not filt_df.empty:
            for entry in res:
                entry['Capability ID'] = id
                entry['Function'] = entry.pop('Function ID and Name', None)
                entry['Activity Name'] = entry.pop('Activity ID and Name', None)
                entry['Input/ Output/ Process'] = entry.pop('I-Input\nP-Process\nO-Output', None)
                entry['Business Capability Statement'] = entry.pop('Business Capability Statement\n [Federal Financial Management System Requirement (FFMSR)]', None)
                entry['Authoritative Reference'] = entry.pop('Authoritative Reference', None)
            all_func_jsons.append(entry)
            
    final_json = all_func_jsons  
    json_res = json.dumps(final_json,indent=4)
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