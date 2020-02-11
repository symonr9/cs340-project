import React from 'react'
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const rows = [
    {id:'1', name:'Action'},
    {id:'2', name:'Romance'},
    {id:'3', name:'Comedy'},
    {id:'4', name:'Horror'},
    {id:'5', name:'Drama'}
  ];  

const Genres = props => {
  const classes = useStyles();
  return <div>Edit Genres 
    <br/><br/>
    Add new Genre:
    <br/>
    <input />
    <br/><br/>
    <button>Add</button>
    <br/><br/><br/><br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delete?</TableCell>
            <TableCell>Genre ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell><button>X</button></TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

Genres.propTypes = {}

export default Genres
