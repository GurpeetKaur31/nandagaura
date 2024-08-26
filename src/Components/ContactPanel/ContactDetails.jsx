import React from 'react';
import DataTable from 'react-data-table-component';
import '../../Styles/ContactDetails.css'; // Import the CSS file

const columns = [
  {
    name: 'S.no',
    selector: row => row.sno,
    sortable: true,
  },
  {
    name: 'District',
    selector: row => row.district,
    sortable: true,
  },
  {
    name: 'Officer Name',
    selector: row => row.officerName,
    sortable: true,
  },
  {
    name: 'Mobile No.',
    selector: row => row.mobileNo,
    sortable: true,
  },
];

const data = [
  { sno: 1, district: 'Almora', officerName: 'RAJEEV KUMAR TIWARI', mobileNo: '9557110679' },
  { sno: 2, district: 'Bageshwar', officerName: 'DEEPAK JOSHI', mobileNo: '7500976442' },
  { sno: 3, district: 'Chamoli', officerName: 'ANIL KUMAR', mobileNo: '86301261157' },
  { sno: 4, district: 'Champawat', officerName: 'YOGESH CHANDRA PANDEY', mobileNo: '9927673939' },
  { sno: 5, district: 'Dehradun', officerName: 'TRILOK RAWAT', mobileNo: '9557502806' },
  { sno: 6, district: 'Dehradun', officerName: 'DHANANJAY NAUTIYAL', mobileNo: '7417793586' },
  { sno: 7, district: 'Haridwar', officerName: 'SANDEEP ARORA', mobileNo: '9808244742' },
  { sno: 8, district: 'Nanital', officerName: 'RAJ SHEKHAR PANDEY', mobileNo: '9536927235' },
  { sno: 9, district: 'Nanital', officerName: 'Dr. RENU MARTOLIA', mobileNo: '9453724644' },
  { sno: 10, district: 'Pauri Garhwal', officerName: 'ANUP SHARMA', mobileNo: '9627611663' },
  { sno: 11, district: 'Pithoragarh', officerName: 'BHAGIRATHI', mobileNo: '9917116549' },
  { sno: 12, district: 'Rudraprayag', officerName: 'SHAILI PRAJAPATI', mobileNo: '9412008985' },
  { sno: 13, district: 'Rudraprayag', officerName: 'KRISHNAKANT THAPLIYAL', mobileNo: '8393047248/8755987526' },
  { sno: 14, district: 'Tehri Garhwal', officerName: 'SANGEETA GOYAL', mobileNo: '9410134988' },
  { sno: 15, district: 'Tehri Garhwal', officerName: 'MANOHAR SINGH PANWAR', mobileNo: '9634011389' },
  { sno: 16, district: 'Usnagar', officerName: 'SUNIL KUMAR', mobileNo: '7055109728' },
  { sno: 17, district: 'Uttarkashi', officerName: 'DEVANSH BHANDARI', mobileNo: '9548794976' },
  { sno: 18, district: 'Uttarkashi', officerName: 'AZAD KOHLI', mobileNo: '9675146340' },
];

const ContactDetails = () => (
  <div className="contact-details-container">
    <h4 className="contact-details-title">
      District Wise Nodal Officer Contact Details
    </h4>
    <div className="contact-details-content">
      <h4 className="contact-details-warning">
        विभागीय कर्मियों से कॉल के दौरान अनुशाशनहीनता किये जाने पर वैधानिक कार्यवाही की जाएगी |
        <br />
        Legal action will be taken if there is indiscipline during the call.
      </h4>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        customStyles={{
          rows: {
            style: {
              fontSize: '1rem', // Adjust font size
              padding: '8px', // Adjust padding
            },
          },
          headCells: {
            style: {
              fontSize: '1.1rem', // Adjust font size for header
              backgroundColor: '#1f14a3', // Header background color
              color: '#fff', // Header text color
              padding: '10px', // Header padding
            },
          },
          cells: {
            style: {
              padding: '10px', // Cell padding
            },
          },
        }}
      />
    </div>
  </div>
);

export default ContactDetails;
