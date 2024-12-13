import pandas as pd
from extract import biz_life, save_file, parse_biz_life, business_capabilities, standard_data_elements

def main():
    data = 'MoM_2024/Mail Operations Management Business Capabilities.xlsx'
    sheet1 = 'MOM Business Capabilities'
    df = pd.read_excel(data, sheet_name=sheet1)
    print(df.columns.to_list())
    json_out = business_capabilities(df)
    print('Check for {} entries'.format(len(json_out)))
    file = open('bus_cap.json','w')
    file.write(json_out)
    file.close()
    
if __name__ == '__main__':
    main()