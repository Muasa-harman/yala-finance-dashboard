
import "./list.scss";
import DataTable from 'react-data-table-component';


const Table = () => {

  const columns = [
    {
      name:'Organisation',
      selector: row =>row.item,
    
    },
    {
      name:'Category',
      selector: row =>row.category,
      sortable:true
    },
    {
      name:'Trees plant date',
      selector: row =>row.date,
      sortable:true
    },
    {
      name: 'Number',
      selector: row =>row.amount,
    },
    {
      name:'Units',
      selector: row =>row.units,
      sortable:true
    },
    {
      name:'Total',
      selector: row =>row.total,
      sortable:true
    },
   
  ];

  const data = [
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
    item: 'kenya Defence Forces',
    category: 'Trees',
    date:'Feb 7, 2024',
    Total:'3000',
    units:1,
    total:'3000',
  },
  {
  item: 'kenya Defence Forces',
  category: 'Trees',
  date:'Feb 7, 2024',
  Total:'3000',
  units:1,
  total:'3000',
},
{
item: 'kenya Defence Forces',
category: 'Trees',
date:'Feb 7, 2024',
Total:'3000',
units:1,
total:'3000',
},
{
item: 'kenya Defence Forces',
category: 'Trees',
date:'Feb 7, 2024',
Total:'3000',
units:1,
total:'3000',
},
{
item: 'kenya Defence Forces',
category: 'Trees',
date:'Feb 7, 2024',
Total:'3000',
units:1,
total:'3000',
},
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kiro february',
      organization: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
     item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
   item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
    {
      item: 'kenya Defence Forces',
      category: 'Trees',
      date:'Feb 7, 2024',
      Total:'3000',
      units:1,
      total:'3000',
    },
  ];
  
  return (
    <div className="list">
      <div className="listContainer">
        <div className="container">
          <div className="sort">
            <select name="" id="" style={{ padding: '0.5rem', border: '1px solid #000', borderRadius: '0.375rem',  }}>
              <option value="">Group by</option>
              <option value="">Trees</option>
              <option value="">Created at</option>
            </select>
          </div>
         
          <DataTable columns={columns} data={data} selectableRows
          fixedHeader pagination 
          />
        </div>
      </div>
    </div>
  )
}

export default Table;
























// import "./table.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const List = () => {
//   const rows = [
    
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       item: "demo",
//       date: "1 March",
//       amount: 2000,
//       units: "1",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       item: "demo",
//       date: "1 March",
//       amount: 2000,
//       units: "2",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       item: "demo",
//       date: "1 March",
//       amount: 2000,
//       units: "4",
//     },
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Item</TableCell>
//             <TableCell className="tableCell">Category</TableCell>
//             <TableCell className="tableCell">Transaction date</TableCell>
//             <TableCell className="tableCell">Amount</TableCell>
//             <TableCell className="tableCell">Units</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="image" />
//                   {row.product}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">{row.item}</TableCell>
//               <TableCell className="tableCell">{row.date}</TableCell>
//               <TableCell className="tableCell">{row.amount}</TableCell>
//               <TableCell className="tableCell">{row.units}</TableCell>
//               <TableCell className="tableCell">
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;