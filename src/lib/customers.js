const XLSX = require('xlsx');

export const getAllCustomers = async () => {
  var workbook = XLSX.readFile('public/excel.xls');
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  return xlData;
}