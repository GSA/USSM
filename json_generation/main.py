import pandas as pd
from finance_mgmt import budget_exec, save_file, business_capabilities, standard_data_elements

def main():
    bus_elem_data = 'Finance_Excel/FMCF-4_FFM_Business_Data_Elements_Release_FY2025[1].xlsx'
    sheet1 = 'Business Data Element List'
    df = pd.read_excel(bus_elem_data, sheet_name=sheet1, header=4)
    json_out = standard_data_elements(df)
    save_file(json_out, 'standard_data_elements.json')
    
    
if __name__ == '__main__':
    main()