// ပြသချင်သည့် စာသားများနှင့် ပုံ (GIF) များ
const steps = [
  {
    text: "စိတ်ဆိုးနေတုန်းလား? 💔",
    image: "https://raw.githubusercontent.com/dfemn14567/Moe-Eaindra-Phyu/refs/heads/main/IMG_20260505_183609.jpg"
  },
  {
    text: "ပစ်ထားတာမို့လို့ ကလေးကျနေတာပဲ 🥺",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJ3aGFyZzlxeXFiZndxZHRxNDNnY3pxMXp4dW9yZjlyYmEzbXNyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L9543GGP90gU/giphy.gif"
  },
  {
    text: "မဆိုးပါနဲ့တော့ အချစ်ရယ်... 💔",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZydnA4NHBjdXJzeTBld2ExZXB3cnR5bXNyeXZkMnRqd3E0dWVqYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d22UJ47yv2880/giphy.gif"
  },
  {
    text: "တောင်းပန်ပါတယ်။ 🥺",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTNud3ptZHAxNWNudmpxMnJxeXlsOHM5eTJic2s3Z3kxeGlsbGNtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ROF8OQvDmxytW/giphy.gif"
  },
  {
    text: "ခွင့်လွှတ်ပေးပါတော့... 💔",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJ2bzNrbXR4cGtwcnZldmtkNmE2dDVydmVvNmw4aXU0ZXE4NmpxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif"
  },
  {
    text: "Just say NO please! 🥺",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNzcGZ1OWZnbmNvdjhxa3Q5bTFzcndic2ptNmN1ZXJpNm1zcTF3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kXdo4BgGOqd3i/giphy.gif"
  }
];

let currentStep = 0;

function handleYes() {
  currentStep++;
  if (currentStep < steps.length) {
    document.getElementById("text-prompt").innerText = steps[currentStep].text;
    document.getElementById("sticker").src = steps[currentStep].image;
  } else {
    // အကုန်ပြီးသွားလျှင် အဖြေမှန်ရသွားသည့် အဆင့်
    document.getElementById("text-prompt").innerText = "စိတ်ဆိုးပြေပြီမို့လို့ ​ကျေး 💖";
    document.getElementById("sticker").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzB2M2x5eDZ6Nnh6b3F4MmlucjAxeTJvNmF4NG13ZW8ycnYwMnBhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif";
    document.querySelector(".buttons").style.display = "none"; // ခလုတ်များကို ဖျောက်လိုက်ခြင်း
  }
}

function handleNo() {
  // NO ကို နှိပ်ပါက စိတ်ဆိုးပြေသည့် အဆင့်သို့ တိုက်ရိုက်ရောက်ရှိမည်
  document.getElementById("text-prompt").innerText = "စိတ်ဆိုးပြေပြီမို့လို့ ​ကျေး 💖";
  document.getElementById("sticker").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzB2M2x5eDZ6Nnh6b3F4MmlucjAxeTJvNmF4NG13ZW8ycnYwMnBhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif";
  document.querySelector(".buttons").style.display = "none";
}

