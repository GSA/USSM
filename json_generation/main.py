import pandas as pd
from extract import biz_life, save_file, parse_biz_life, business_capabilities, standard_data_elements

def main():
    data = 'Travel_2024/Excel/Travel and Expense Management Service Measures.xlsx'
    sheet1 = 'Service Measures'
    df = pd.read_excel(data, sheet_name=sheet1)
    print(df.columns.to_list())
    json_out = standard_data_elements(df)
    print('Check for {} entries'.format(len(json_out)))
    file = open('standard_data_elements.json','w')
    file.write(json_out)
    file.close()
    
if __name__ == '__main__':
    main()