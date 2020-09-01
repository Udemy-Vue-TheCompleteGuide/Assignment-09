<template>
  <div>
    <template v-if="!isFullNameEditMode">
      <span>Full Name: {{ fName }} {{ lName }}</span>
      <button class="btn btn-link" @click="showFullNameEditor">Edit</button>
    </template>
    <template v-else>
      <form class="form-inline">
        Full Name:
        <div class="form-group">
          <label class="sr-only" for="first-name">Email address</label>
          <input type="text" class="form-control" id="first-name" placeholder="First Name"
                 v-model="fName">
        </div>
        <div class="form-group">
          <label class="sr-only" for="last-name">Password</label>
          <input type="text" class="form-control" id="last-name" placeholder="Last Name"
                 v-model="lName">
        </div>
        <button class="btn btn-success" @click="saveFullName">Save</button>
      </form>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FullName',

  props: {
    fName: String,
    lName: String
  },

  data() {
    return {
      isFullNameEditMode: false
    };
  },

  methods: {
    showFullNameEditor() {
      this.isFullNameEditMode = true;
    },

    saveFullName() {
      this.isFullNameEditMode = false;
    }
  }
}
</script>

<style scoped>
#first-name, #last-name {
  margin-right: 5px;
}
</style>
