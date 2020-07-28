<template>
  <div class="todos">
    <TodoList />
    <Modal />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
export default {
  name: "Todos",
  components: {
    TodoList,
    Modal
  }
};
</script>
