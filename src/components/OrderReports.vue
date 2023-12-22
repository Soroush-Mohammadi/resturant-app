<template>
  <v-toolbar color="transparent" class="pr-1 mt-n2">
    <v-toolbar-title class="text-white">Order Reports</v-toolbar-title>

    <v-spacer></v-spacer>
    <span class="text-caption text-white">View all</span>
    <v-btn
      density="compact"
      icon="mdi mdi-chevron-right-box"
      color="grey"
    ></v-btn>
  </v-toolbar>
  <h6 class="text-white ml-4 mt-n4">
    <span class="text-red">Wow 100+ new </span> Order got this week
  </h6>
  <v-card class="rounded-xl ma-2 pa-1" color="#424343">
    <v-row>
      <v-col cols="12" sm="1"> </v-col>
      <v-col cols="12" sm="2" class="text-center"
        ><span class="text-caption">Customer</span></v-col
      >
      <v-col cols="12" sm="2" class="text-center"
        ><span class="text-caption">Order number</span></v-col
      >
      <v-col cols="12" sm="2" class="text-center"
        ><span class="text-caption">address</span></v-col
      >
      <v-col cols="12" sm="2" class="text-center"
        ><span class="text-caption">Amount</span></v-col
      >
      <v-col cols="12" sm="2" class="text-center"
        ><span class="text-caption">Status</span></v-col
      >
      <v-col cols="12" sm="1" class="text-center"></v-col>
    </v-row>
  </v-card>
  <v-row>
    <v-col cols="12" sm="3" class=""
      ><v-avatar> <v-img src="20.jpg" alt="John"></v-img> </v-avatar
      ><span class="text-caption text-white ml-1">Jamsed Jhon</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">0123595874</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">Karking Teagha</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">$120.45</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center">
      <v-chip variant="flat" color="green"> Completed </v-chip></v-col
    >
    <v-col cols="12" sm="1" class="text-center"></v-col>
  </v-row>
  <v-row class="mt-n5">
    <v-col cols="12" sm="3" class=""
      ><v-avatar> <v-img src="30.jpg" alt="John"></v-img> </v-avatar
      ><span class="text-caption text-white ml-1">Peter Poker</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">36258475</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">City 1 november</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center mt-2"
      ><span class="text-caption text-white">$140.45</span></v-col
    >
    <v-col cols="12" sm="2" class="text-center">
      <v-chip variant="flat" color="orange"> Pending </v-chip></v-col
    >
    <v-col cols="12" sm="1" class="text-center"></v-col>
  </v-row>
</template>
