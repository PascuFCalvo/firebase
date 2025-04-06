import React, { useState } from "react";
import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";

// Componente de tarea (Draggable)
function DraggableTask({ task }) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: task.id, // Asigna un identificador único para cada tarea
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50", // Color de fondo para las tareas
        color: "white",
        margin: "5px 0",
        borderRadius: "5px",
        cursor: "move",
      }}
    >
      {task.text}
    </div>
  );
}

// Componente Droppable (para las columnas)
function DroppableColumn({ tasks, id, title }) {
  const { setNodeRef } = useDroppable({
    id, // Identificador único para el área de soltar
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "300px",
        minHeight: "300px",
        border: "2px dashed #333",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h3>{title}</h3>
      {tasks.map((task) => (
        <DraggableTask key={task.id} task={task} />
      ))}
      <div
        style={{
          border: "2px dashed #ccc",
          height: "100px",
          marginTop: "10px",
          textAlign: "center",
          lineHeight: "100px",
        }}
      >
        {tasks.length === 0 ? "Drop tasks here" : ""}
      </div>
    </div>
  );
}

function DraggableComponent() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: "task-1", text: "Task 1 - To Do" },
      { id: "task-2", text: "Task 2 - To Do" },
      { id: "task-3", text: "Task 3 - To Do" },
    ],
    inProgress: [
      { id: "task-4", text: "Task 4 - In Progress" },
      { id: "task-5", text: "Task 5 - In Progress" },
    ],
    done: [
      { id: "task-6", text: "Task 6 - Done" },
      { id: "task-7", text: "Task 7 - Done" },
    ],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Si el objeto no ha sido soltado en un área válida, no hacemos nada
    if (!over) return;

    // Obtener la tarea activa y la columna de destino
    const activeTask = tasks[active.data.current.containerId].find(
      (task) => task.id === active.id
    );

    // Crear una nueva copia de las tareas para evitar la mutación del estado
    const newTasks = { ...tasks };

    // Eliminar la tarea del contenedor original
    newTasks[active.data.current.containerId] = newTasks[
      active.data.current.containerId
    ].filter((task) => task.id !== active.id);

    // Agregar la tarea al contenedor de destino
    newTasks[over.data.current.containerId].push(activeTask);

    setTasks(newTasks); // Actualiza el estado con las nuevas tareas
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex" }}>
        <DroppableColumn title="To Do" id="todo" tasks={tasks.todo} />
        <DroppableColumn
          title="In Progress"
          id="inProgress"
          tasks={tasks.inProgress}
        />
        <DroppableColumn title="Done" id="done" tasks={tasks.done} />
      </div>
    </DndContext>
  );
}

export default DraggableComponent;
