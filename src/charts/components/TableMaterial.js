import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles(() => ({
  head: {
    color: "#FFF",
    background: "#147551",
    textAlign: "center",
    fontSize: 17,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TableMaterial() {
  let f = new Date();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Administrador</StyledTableCell>
            <StyledTableCell>
              Negocio:{" "}
              <span className="badge badge-success">{`Abarrotes`}</span>
            </StyledTableCell>
            <StyledTableCell>
              Fecha:{" "}
              <span className="badge badge-success">
                {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
              </span>
            </StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default TableMaterial;
