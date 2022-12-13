<template>
  <div>
    <router-link to="/tambah" class="py-3 px-5 text-bold text-xl bg-sky-600 text-white rounded-md hover:bg-sky-500 hover:animation duration-1000">Isi Buku tamu</router-link>
      <table class="w-full border-collapse border border-slate-500 text-center mt-5">
        <thead class="h-10 bg-[#0284c7]">
          <tr>
            <th
              class="border border-slate-500 text-xl font-bold text-center text-white py-5"
            >
              Nama
            </th>
            <!-- <th
              class="border border-slate-500 text-xl font-bold text-center text-white"
            >
              Email
            </th> -->
            <th
              class="border border-slate-500 text-xl font-bold text-center text-white"
            >
              Asal
            </th>
            <th
              class="border border-slate-500 text-xl font-bold text-center text-white"
            >
              Kesan pesan
            </th>
          </tr>
        </thead>
        <tbody class=" bg-slate-600">
          <tr>
            <td v-if="loading" colspan="3" class="py-3 text-white text-xl">
              <em>sedang memuat...</em>
            </td>
          </tr>
          <tr v-for="user in users" :key="user.id">
            <td
              class="border border-slate-500 text-xl font-semibold text-white py-3"
            >
              {{ user.nama }}
            </td>
            <!-- <td
              class="border border-slate-500 text-xl first-letter: font-semibold text-white"
            >
              {{ user.email }}
            </td> -->
            <td
              class="border border-slate-500 text-xl first-letter: font-semibold text-white"
            >
              {{ user.asal }}
            </td>
            <td
              class="border border-slate-500 text-xl first-letter: font-semibold text-white"
            >
              {{ user.pesan }}
            </td>
          </tr>
        </tbody>
      </table>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: "",
      loading: true,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      this.loading = true
      let { data, error } = await this.$supabase
        .from("absen")
        .select("id,created_at,nama,asal,pesan");
      if(data) {
        this.users = data;
        this.loading = false
      }
    },
  },
};
</script>
