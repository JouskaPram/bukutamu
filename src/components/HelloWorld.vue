<template>
  <div>
    <!-- <router-link to="/tambah" class="py-3 px-5 text-bold text-sm bg-sky-600 text-white rounded-md hover:bg-sky-500 hover:animation duration-1000">Isi Buku tamu</router-link> -->
    <div v-if="users.length < 1" class="mb-5 text-xl text-white"><em>sedang memuat...</em></div>
    <div v-else class="mb-5 text-bold text-sm text-white">Menampilkan {{ users.length }} pesan</div>
      <table class="w-full border-collapse border border-slate-500  mt-5 table-auto">
        <thead class="h-10 bg-[#0284c7]">
          <tr>
            <th
              class="border border-slate-500 text-sm font-bold text-center text-white"
            >
              Numb.
            </th>
            <th class="border border-slate-500 text-sm font-bold text-center text-white py-5 w-auto">Tanggal</th>
            <th
              class="border border-slate-500 text-sm font-bold text-center text-white py-5"
            >
              Nama
            </th>
            <th
              class="border border-slate-500 text-sm font-bold text-center text-white"
            >
              Asal
            </th>
            <th
              class="border border-slate-500 text-sm font-bold text-center text-white"
            >
              Kesan/pesan
            </th>
          </tr>
        </thead>
        <tbody class=" bg-slate-600">
          <tr>
            <td v-if="loading" colspan="5" class="py-3 text-white text-sm text-center">
              <em>sedang memuat...</em>
            </td>
          </tr>
          <tr v-for="(user, i) in users" :key="user.id">
            <td
              class="border border-slate-500 text-center text-sm first-letter: font-semibold text-white"
            >
              {{ i+1 }}.
            </td>
            <td class="border border-slate-500 text-sm text-white py-5 px-2">
              {{ user.created_at }}
            </td>
            <td
              class="border border-slate-500 text-sm font-semibold text-white py-3 px-2"
            >
              {{ user.nama }}
            </td>
            <td
              class="border border-slate-500 text-sm first-letter: font-semibold text-white px-2"
            >
              {{ user.asal }}
            </td>
            <td
              class="border border-slate-500 text-sm first-letter: font-semibold text-white px-2"
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
        .select("id,created_at,nama,asal,pesan")
        .order('created_at', { ascending: false })
      if(data) {
        for (let i = 0; i < data.length; i++) {
          let tanggal = new Date(Date.parse(data[i].created_at)).toDateString() + ", "
          data[i].created_at = tanggal + new Date(Date.parse(data[i].created_at)).toLocaleTimeString()
        }
        this.users = data
        this.loading = false
      }
    },
  },
};
</script>
