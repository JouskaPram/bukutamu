<template>
  <div>
    <div class="flex items-center justify-center ">
    
      <div class="mx-auto w-full max-w-[550px]">
        <form @submit.prevent="postAbsen()">
          
          <div class="mb-5">
            
            <input
              v-model="form.nama"
              type="text"
              name="name"
              id="name"
              placeholder="Nama Lengkap"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <!-- <div class="mb-5">
         
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div> -->
          <div class="mb-5">
           
            <input
              v-model="form.asal"
              type="text"
              name="subject"
              id="subject"
              placeholder=""
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div class="mb-5">
      
            <textarea
              v-model="form.pesan"
              rows="4"
              name="message"
              id="message"
              placeholder="Masukan Pesan"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-xl font-semibold text-white outline-none"
            >
              Submit
            </button>
            <router-link to="/home" class="py-3 px-5 bg-rose-600 text-xl font-bold mx-4 text-white rounded-md outline-none">Kembali</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from "vue-supabase";
export default {
  data() {
    return {
      form: {
        id:"",
        nama: "",
        asal: "",
        email: "",
        pesan: "",
      },
    };
  },
  onMounted() {
    this.postAbsen();
  },
  methods: {
    async postAbsen() {
      const { data, error } = await this.$supabase.from("absen").insert({
  
        nama: this.form.nama,
        asal: this.form.asal,
        email: this.form.email,
        pesan: this.form.pesan,
      });
      this.form = data;
    

      if (error) throw error;
    },
  },
};
</script>
