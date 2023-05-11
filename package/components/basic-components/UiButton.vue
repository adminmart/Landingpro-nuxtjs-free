<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Buttons
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="text-h3 mb-3 font-weight-bold">Buttons</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Buttons
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <div class="text-center">
          <div class="btn-groups gap-2 d-flex flex-wrap justify-center">
            <v-btn variant="tonal" flat> Normal </v-btn>
            <v-btn color="primary" flat> Primary </v-btn>
            <v-btn color="secondary" flat> Secondary </v-btn>
            <v-btn color="error" flat> Error </v-btn>
            <v-btn color="warning" flat> Warning </v-btn>
            <v-btn color="success" flat> Success </v-btn>
          </div>
        </div>
        <div class="text-center mt-6">
          <div class="btn-groups gap-2 d-flex flex-wrap justify-center">
            <v-btn variant="outlined"> Normal </v-btn>
            <v-btn variant="outlined" color="primary"> Primary </v-btn>
            <v-btn variant="outlined" color="secondary"> Secondary </v-btn>
            <v-btn variant="outlined" color="error"> Error </v-btn>
            <v-btn variant="outlined" color="warning"> Warning </v-btn>
            <v-btn variant="outlined" color="success"> Success </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiButton",
  data() {
    return {};
  },
  methods: {},
};
</script>
