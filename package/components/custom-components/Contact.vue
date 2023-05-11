<script setup lang="ts">
import { Portfolio } from '@/_mockApis/custom-components/index';
</script>
<template>
    <div class="py-md-15 py-8">
        <v-container>
            <v-row class="justify-center">
                <v-col cols="12" sm="8">
                    <div class="text-center">
                        <div class="d-flex align-center mb-5 justify-center" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Contact</h6>
                        </div>
                        <h2 class="text-h2 text-dark mb-md-12 mb-6" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1000">Quick Contact</h2>
                    </div>
                </v-col>
            </v-row>
            <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <div>
                        <form>
                            <v-row class="mt-1">
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Name" variant="outlined" color="primary"
                                        placeholder="Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="py-0">
                                    <v-text-field label="Email" variant="outlined" type="email" color="primary"
                                        placeholder="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" class="py-0">
                                    <v-textarea name="message" color="primary" variant="outlined" label="Message"
                                        rows="3"></v-textarea>
                                </v-col>
                            </v-row>
                            <v-btn to="/" class="mt-7 px-8 py-2"  flat size="large" color="primary">
                                Submit
                            </v-btn>
                        </form>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="bg-primary pa-sm-10 pa-5 rounded-md">
                        <h2 class="detail-title font-weight-medium text-white ">
                            Adminmart Headquarters
                        </h2>
                        <p class="mt-7 op-8 mb-0 text-white">251 546 9442</p>
                        <p class="op-8 mb-8 text-white">info@Adminmart.com</p>
                        <p class="mt-7 op-8 mb-0 text-white">601 Sherwood Ave.</p>
                        <p class="op-8 mb-0 text-white">San Bernandino, CA 92404</p>
                    </div>
                </v-col>
            </v-row>
            <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
        </v-container>
    </div>
</template>