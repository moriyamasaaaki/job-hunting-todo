<template>
  <div class="home">
    <TodoList />
    <Modal />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
export default {
  name: "Home",
  components: {
    TodoList,
    Modal
  }
};
</script>
