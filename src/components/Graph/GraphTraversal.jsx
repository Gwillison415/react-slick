import React from "react";
import { Graph } from "./graphUtil";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "auto",
    minHeight: 50,
    flexWrap: "wrap",

    "& > *": {
      margin: 28,
      // width: theme.spacing(16),
      // height: theme.spacing(16),
    },
    button: {
      width: 250,
    },
    textField: {
      width: 400,
    },
    description: {
      "& p": {
        fontStyle: "italic",
        margin: 20,
      },
    },
  },
}));
const useTableStyles = makeStyles((theme) => ({
  table: {
    minWidth: 200,
  },
  container: {
    // width: "50%",
  },
}));
const DisplayTable = (graph) => {
  const classes = useTableStyles();
  const [nodes, edges] = graph.dataDump();
  const nodeTally = nodes.map((node) => {
    const { value, children } = node;
    return { value, children };
  });
  const edgeTally = edges.map((edge) => {
    const { first, second } = edge;
    return { first, second };
  });
  return (
    <>
      {" "}
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>node</TableCell>
              <TableCell align="right">children</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodeTally.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.value}
                </TableCell>
                <TableCell align="right">
                  {row.children.map((graphNode) => graphNode.value).join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>edge from</TableCell>
              <TableCell align="right">edge to</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {edgeTally.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.first.value}
                </TableCell>
                <TableCell align="right">{row.second.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </>
  );
};
const ourGraph = new Graph();
export default function GraphTraversal() {
  const classes = useStyles();
  const [node, setNode] = React.useState("");
  const [childNode, setChildNode] = React.useState("");
  const [edgeDestinationNode, setEdgeDestination] = React.useState("");

  const handleKeyPress = (e) => {
    e.stopPropagation();
  };
  const handleChange = (e, callback) => {
    callback(e.target.value);
    e.preventDefault();
  };

  const addRelation = () => {
    if (node && edgeDestinationNode) {
      ourGraph.addNode(node);

      const edge = ourGraph.addEdge(node, edgeDestinationNode);
      console.log("edge", edge);
    } else if (node) {
      ourGraph.addNode(node);
    }
    console.log("node", node);
    console.log("edgeDestinationNode", edgeDestinationNode);

    setNode("");
    setEdgeDestination("");
  };
  const addChildRelation = () => {
    console.log("---addChildRelation---");

    if (childNode.length && node.length && edgeDestinationNode.length) {
      ourGraph.addNode(node);
      console.log("childNode", childNode);
      ourGraph.addChild(node, childNode);
      const edge = ourGraph.addEdge(childNode, edgeDestinationNode);
      console.log("edge", edge);
    } else if (node.length && edgeDestinationNode.length) {
      ourGraph.addNode(node);

      const edge = ourGraph.addEdge(node, edgeDestinationNode);
      console.log("edge", edge);
    } else if (node) {
      ourGraph.addNode(node);
    }
    console.log("childNode", childNode);
    setChildNode("");
    setNode("");
    setEdgeDestination("");
  };
  console.log("loaded graph");
  return (
    <div id="ikkk3" className={classes.root}>
      <Paper elevation={3}>
        <div>Graph Traversal</div>
        <div className={classes.description}></div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            noValidate
            autoComplete="off"
          >
            {" "}
            <p>
              {" "}
              Consider a directed graph of small non-negative integers where
              each integer is less than 60,000 and each integer is unique. In
              this case, a directed graph is a data structure where a node is
              represented by a unique integer and each node has zero or more
              child nodes. As above, don't just use an existing graph library. -
              Write a function that creates a node in a graph. - Write a
              function that inserts a node as a child of another node. - These
              functions should not allow cycles to be created. That is, a node
              may not directly or indirectly point to itself. - Write a function
              to print out a graph
            </p>
            <Paper elevation={5}>
              {" "}
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="source node value"
                variant="outlined"
                value={node}
                onChange={(e) => {
                  handleChange(e, setNode);
                }}
                autoFocus
                //   onKeyPress={handleKeyPress}
              />
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="destination node value"
                variant="outlined"
                value={edgeDestinationNode}
                onChange={(e) => {
                  handleChange(e, setEdgeDestination);
                }}
                autoFocus
              />
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={() => addRelation()}
              >
                Generate Relation
              </Button>
            </Paper>
            <Paper elevation={5}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="node value"
                variant="outlined"
                value={node}
                onChange={(e) => {
                  handleChange(e, setNode);
                }}
                autoFocus
                //   onKeyPress={handleKeyPress}
              />
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="child node value"
                variant="outlined"
                value={childNode}
                onChange={(e) => {
                  handleChange(e, setChildNode);
                }}
                autoFocus
                onKeyPress={handleKeyPress}
              />
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="edge destination"
                variant="outlined"
                value={edgeDestinationNode}
                onChange={(e) => {
                  handleChange(e, setEdgeDestination);
                }}
                autoFocus
              />
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                disabled={
                  node.length < 0 ||
                  childNode.length < 0 ||
                  edgeDestinationNode.length < 0
                }
                onClick={() => addChildRelation()}
              >
                Generate Child Relation
              </Button>
            </Paper>
          </form>
        </div>
        <div style={{ display: "inline-flex" }}>{DisplayTable(ourGraph)}</div>

        <div></div>
      </Paper>
    </div>
  );
}
