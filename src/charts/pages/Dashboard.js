import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Navbar from "../components/Navbar";
// import 'fontsource-roboto';
// import '../assets/css/Dashboard.css';
// import PublicIcon from "@material-ui/icons/Public";
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import VideocamIcon from "@material-ui/icons/Videocam";
import CardsHeader from "../components/CardsHeader";
// import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
// import Cards from "../components/Cards";
import Graphics from "../components/Graphics";
import TableMaterial from "../components/TableMaterial";
import CloudIcon from "@material-ui/icons/Cloud";
import { ContextEstado } from "../../context/ContextEstado";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  iconos: {
    color: "white",
  },
  container: {
    paddingTop: "40px",
    alignItems: "center",
  },
  containerGrafica: {
    marginTop: "40px",
  },
  containerTabla: {
    marginTop: "40px",
  },
}));

const data = [];

function Dashboard() {
  const classes = useStyles();
  const { acumulado } = useContext(ContextEstado);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
                    <Navbar/>
                </Grid> */}

        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<AccountBalanceIcon className={classes.iconos} />}
            titulo="Sucursales"
            texto="1"
            color="#052C48"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<EmojiPeopleIcon className={classes.iconos} />}
            titulo="Empleados"
            texto={3}
            color="#f1bf34"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader
            icono={<CloudIcon className={classes.iconos} />}
            titulo="Ventas MES"
            texto={`$ ${acumulado}`}
            color="#147551"
            font="white"
          />
        </Grid>

        <Grid
          container
          spacing={4}
          className={classes.root}
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6} spacing={4}>
            <Cards titulo="TIEMPO VISUALIZACIÓN" texto="2,504 horas" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="PORCENTAJE IMPRESIONES" texto="14.2%" />
          </Grid> */}
        </Grid>

        {/* <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid> */}

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={classes.containerGrafica}
        >
          <Graphics />
        </Grid>

        <Grid item xs={12} className={classes.containerTabla}>
          <TableMaterial data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
