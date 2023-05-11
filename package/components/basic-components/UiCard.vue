<script setup lang="ts">
import s1 from '/images/portfolio/portfolio-1.jpg';
import s2 from '/images/portfolio/portfolio-2.png';
import s3 from '/images/portfolio/portfolio-5.jpg';
const UiCard =[
    {
        img:s1,
        title:'Special Title Treatment',
        subtitle:'Number 10',
        desc:'Whitehaven Beach Whitsunday Island, Whitsunday Islands',
    },
    {
        img:s2,
        title:'Special Title Treatment',
        subtitle:'Number 10',
        desc:'Whitehaven Beach Whitsunday Island, Whitsunday Islands',
    },
    {
        img:s3,
        title:'Special Title Treatment',
        subtitle:'Number 10',
        desc:'Whitehaven Beach Whitsunday Island, Whitsunday Islands',
    }
]
</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Card
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="text-h3 mb-3">Card</h2>
              <p class="text-muted">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website & dashboard in No-time.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Card
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6" lg="4" v-for="card in UiCard" :key="card.title">
            <v-card class="mx-auto "  elevation="0" variant="outlined"  max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                :src="card.img"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
              >
                <v-card-title class="text-h5 text-white">{{card.title}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4 text-subtitle-1">
                {{card.subtitle}}
              </v-card-subtitle>

              <v-card-text class="pt-3 pl-4">
                <div class="text-subtitle-1 text-dark">{{card.desc}}</div>
              </v-card-text>

              <v-card-actions class="pl-4 pb-4">
                <v-btn color="primary" class="btn" variant="outlined">Share</v-btn>
                <v-btn color="error" class="btn" variant="outlined"> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
