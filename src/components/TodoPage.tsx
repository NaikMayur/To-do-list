"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button, List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/app/redux/slices/todoSlice";
import Image from "next/image";

interface Data {
  id: number;
  title: string;
  content: string;
}

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    minHeight: 150,
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
});

const TodoPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState<Data[]>([]);
  const [apiData, setApiData] = useState<any>(null);
  const number = useSelector((state: any) => {
    return state.todo.number;
  });
  useEffect(() => {
    const initialData = [
      { id: 1, title: "Task 1", content: "Complete this task first." },
      { id: 2, title: "Task 2", content: "Don't forget about this one." },
      {
        id: 3,
        title: "Task 3",
        content: "Ok you have one more on the list, Check out this one too.",
      },
    ];
    setData(initialData);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setApiData(res));
  }, []);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.index === source.index) return;

    const newData = [...data];
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);

    setData(newData);
  };
  function add() {
    dispatch(increment());
  }
  function subtract() {
    dispatch(decrement());
  }
  console.log(apiData);
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "5rem" }}
          justifyContent="center"
        >
          <Droppable droppableId="todo">
            {(provided) => (
              <Grid item ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={String(item.id)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card key={item.id} className={classes.card}>
                          <CardContent>
                            <Typography
                              variant="body2"
                              className={classes.cardTitle}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.content}
                            </Typography>
                            <Button onClick={add}>+</Button>
                            <Typography>{number <= 0 ? 0 : number}</Typography>
                            <Button onClick={subtract}>-</Button>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </Grid>
      </DragDropContext>
      <Grid container>
        {apiData && (
          <List>
            {apiData.products.map((data: any) => (
              <div>
                <ListItem>{data.title}</ListItem>
                {data.images.map((img: any) => (
                  <Image src={img} alt="image" width={50} height={50} />
                ))}
              </div>
            ))}
          </List>
        )}
      </Grid>
    </>
  );
};

export default TodoPage;
