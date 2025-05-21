import pandas as pd
from extract import biz_life, capabilities,save_file, parse_biz_life, business_capabilities, standard_data_elements

def main():
    data = 'HCM_2025/Employee Performance Management Business Capabilities List.xlsx'
    sheet1 = 'Business Capabilities List'
    df = pd.read_excel(data, sheet_name=sheet1)
    print(df.columns.to_list())
    json_out = capabilities(df)
    #print('Check for {} entries'.format(len(json_out)))
    file_name = 'cap.json'
    file = open(file_name,'w')
    file.write(json_out)
    file.close()
    print('Printed content out to {}'.format(file_name))
    
if __name__ == '__main__':
    main()