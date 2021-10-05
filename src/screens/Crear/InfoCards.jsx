import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { InfoField } from "./Components";

import "./index.scss";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const InfoCards = ({ formulario, formulario: { fields }, setFormulario }) => {
  const handlerDeleteField = (element) => {
    fields = fields.filter((item) => item !== element);
    setFormulario({ ...formulario, fields });
  };

  console.log(fields);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        const reordenado = (prevTasks) =>
          reorder(prevTasks, source.index, destination.index);

        setFormulario(...formulario, reordenado);
      }}
    >
      <Droppable droppableId="tasks">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="task-container"
          >
            {fields.map((field, index) => (
              <Draggable key={index} draggableId={index} index={index}>
                {(draggableProvided) => (
                  <InfoField
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className="task-item"
                    key={index}
                    element={field}
                    handlerDeleteField={() => handlerDeleteField(field)}
                  />
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default InfoCards;
