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

  const handlerOnDragEnd = (result) => {
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

    const reordenar = (prevTasks) =>
      reorder(prevTasks, source.index, destination.index);

    setFormulario({
      ...formulario,
      fields: reordenar(fields),
    });
  };

  return (
    <DragDropContext onDragEnd={handlerOnDragEnd}>
      <Droppable droppableId="fields">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            style={{ padding: 0 }}
          >
            {fields.map((field, index) => (
              <Draggable
                key={field.field_order}
                draggableId={field.field_order}
                index={index}
              >
                {(draggableProvided) => (
                  <InfoField
                    draggableProps={draggableProvided.draggableProps}
                    innerRef={draggableProvided.innerRef}
                    dragHandleProps={draggableProvided.dragHandleProps}
                    key={field.field_order}
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
