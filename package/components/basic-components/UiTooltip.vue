<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Tooltip
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="text-h3 mb-3">Tooltip</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Tooltip
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <div class="text-center">
          <div class="btn-groups d-flex flex-wrap gap-2 justify-center">
            <v-btn class="bg-primary" flat>
              Start
              <v-tooltip activator="parent" location="start">Left Tooltip</v-tooltip>
            </v-btn>
            <v-btn class="bg-primary" flat>
              Top
              <v-tooltip activator="parent" location="top">Top Tooltip</v-tooltip>
            </v-btn>
            <v-btn class="bg-primary" flat>
              Bottom
              <v-tooltip activator="parent" location="bottom"
                >Bottom Tooltip</v-tooltip
              >
            </v-btn>
            <v-btn class="bg-primary" flat>
              End
              <v-tooltip activator="parent" location="end">Right Tooltip</v-tooltip>
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
