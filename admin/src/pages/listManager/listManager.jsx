import "./listManager.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext.js";
import { deleteList, getLists } from "../../context/listContext/apiCalls.js";

export default function ListManager() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const navigate = useNavigate();

  const handleEditClick = (list) => {
    navigate("/list/" + list._id, { state: { list: list } });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="productListEdit" onClick={() => handleEditClick(params.row)}>Edit</button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
    {
      field: "add-list-button",
      headerName: (
        <Link to={"/newList"}>
          <button className="addListButton">+ Add a new list</button>
        </Link>
      ),
      width: 200,
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <>
      <div className="productList">
        <DataGrid
          rows={lists}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </>
  );
}
