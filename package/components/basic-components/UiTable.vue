<script setup lang="ts">
const UiTable =[
    {
      name: "Frozen Yogurt",
      calories: 159,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
    },
    {
      name: "Eclair",
      calories: 262,
    },
    {
      name: "Cupcake",
      calories: 305,
    },
    {
      name: "Gingerbread",
      calories: 356,
    },
    {
      name: "Jelly bean",
      calories: 375,
    },
    {
      name: "Lollipop",
      calories: 392,
    },
    {
      name: "Honeycomb",
      calories: 408,
    },
    {
      name: "Donut",
      calories: 452,
    },
    {
      name: "KitKat",
      calories: 518,
    },
];

</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Table
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="text-h3 mb-3">Table</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Table
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <v-card  elevation="0" variant="outlined" >
              <v-card-text>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left text-dark">Name</th>
                      <th class="text-left text-dark">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in UiTable" :key="item.name">
                      <td class="text-muted text-subtitle-1"> {{ item.name }}</td>
                      <td  class="text-muted text-subtitle-1">{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
