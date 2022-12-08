<template>
  <div>
    <div class="px-24 pt-24">
      <table class="w-full border-collapse border border-slate-500">
        <thead class="h-10 bg-sky-600">
          <tr>
            <th
              class="border border-slate-600 text-xl font-bold text-center text-white"
            >
              Nama
            </th>
            <th
              class="border border-slate-600 text-xl font-bold text-center text-white"
            >
              Email
            </th>
            <th
              class="border border-slate-600 text-xl font-bold text-center text-white"
            >
              Asal
            </th>
            <th
              class="border border-slate-600 text-xl font-bold text-center text-white"
            >
              Kesan pesan
            </th>
          </tr>
        </thead>
        <tbody class="h-10 bg-slate-600">
          <tr v-for="user in users">
            <td
              class="border border-slate-600 text-md font-semibold text-white"
            >
              {{ user.nama }}
            </td>
            <td
              class="border border-slate-600 text-md font-semibold text-white"
            >
              {{ user.email }}
            </td>
            <td
              class="border border-slate-600 text-md font-semibold text-white"
            >
              {{ user.asal }}
            </td>
            <td
              class="border border-slate-600 text-md font-semibold text-white"
            >
              {{ user.pesan }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: "",
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      let { data, error } = await this.$supabase
        .from("absen")
        .select("id,created_at,nama,asal,email,pesan");
      this.users = data;
    },
  },
};
</script>
