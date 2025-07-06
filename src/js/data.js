const data = {
  personal_info: {
    name: "Lê Minh Trí",
    title: "Lập trình viên Full-stack & Nhà thiết kế sáng tạo",
    address: "Đà Nẵng, Việt Nam",
    email: "minhtri.webdev@gmail.com",
    birth: "03/11/2003",
    phone: "+84 934 961 544",
    bio: "Tôi là một lập trình viên mới ra trường, chưa có nhiều kinh nghiệm thực tiễn nhưng luôn nhiệt huyết, ham học hỏi và đam mê phát triển các ứng dụng web hiện đại.Tôi đặc biệt quan tâm đến việc tạo ra trải nghiệm người dùng tốt và không ngừng trau dồi kỹ năng về cả lập trình lẫn thiết kế UI/ UX để hoàn thiện bản thân và mang lại giá trị cho sản phẩm.",
    social_media: {
      facebook: "https://www.facebook.com/chuy2kar3",
      instagram: "https://www.instagram.com/chuyyy2kar3/",
      tiktok: "https://www.tiktok.com/@chuyyy2kar3",
      github: "https://github.com/trileminhfb",
    },
  },
  skills: {
    frontend: [
      { name: "HTML/CSS", proficiency: "75" },
      { name: "JavaScript", proficiency: "60" },
      { name: "Vue", proficiency: "55" },
    ],
    backend: [
      { name: "Node.js", proficiency: "50" },
      { name: "PHP Laravel", proficiency: "60" },
      { name: "Database", proficiency: "55" },
    ],
    other: [
      { name: "UI/UX Design", proficiency: "65" },
      { name: "Git", proficiency: "62" },
      { name: "Tiếng Anh", proficiency: "50" },
      { name: "Tin học văn phòng", proficiency: "80" },
    ],
  },
  projects: [
    {
      title: "Trang mạng xã hội",
      description:
        "Xây dựng website mạng xã hội để người dùng có thể tương tác và trò chuyện với nhau.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      image: "https://cdn.tgdd.vn/hoi-dap/845011/mxh-thao-phuong-800x385.jpg",
      link: "#",
    },
    {
      title: "Hệ thống quản lý nhà hàng",
      description:
        "Hệ thống quản lý nhà hàng với nhiều tính năng thông minh và giao diện thân thiện có tích hợp AI để tư vấn món ăn.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      image:
        "https://hct.edu.vn/sites/default/files/cover-nha-hang-nhat-ban-khong-the-khong-di-o-ha-noi-1.jpg",
      link: "#",
    },
    {
      title: "Hệ thống bán hàng",
      description:
        "Thiết kế và phát triển một website bán hàng có đầy đủ các chức năng thanh toán.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      image:
        "https://file.hstatic.net/1000192210/file/he-thong-ban-hang-haravan-1_grande.png",
      link: "#",
    },
  ],
  contact: {
    email: "minhtri.webdev@gmail.com",
    phone: "+84 934 961 544",
    address: "Đà Nẵng, Việt Nam",
    message:
      "Cảm ơn bạn đã quan tâm đến portfolio của tôi. Nếu bạn có bất kỳ câu hỏi hoặc cơ hội hợp tác nào, đừng ngần ngại liên hệ với tôi!",
  },
};

const birthDateParts = data.personal_info.birth.split("/");
const birthDate = new Date(
  +birthDateParts[2],
  birthDateParts[1] - 1,
  +birthDateParts[0]
);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Render Hero Section
document.getElementById("hero-name").textContent = data.personal_info.name;
document.getElementById("hero-title").textContent = data.personal_info.title;

// Render About Section
document.getElementById("bio").textContent = data.personal_info.bio;
document.getElementById(
  "birth"
).innerHTML = `<span class="font-semibold">Tuổi:</span> ${age}`;
document.getElementById(
  "address"
).innerHTML = `<span class="font-semibold">Địa chỉ:</span> ${data.personal_info.address}`;
document.getElementById(
  "email"
).innerHTML = `<span class="font-semibold">Email:</span> ${data.personal_info.email}`;
document.getElementById(
  "phone"
).innerHTML = `<span class="font-semibold">Phone:</span> ${data.personal_info.phone}`;

// Render Skills Section
const renderSkills = (skills, containerId) => {
  const container = document.getElementById(containerId);
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = `
      <p class="font-medium">${skill.name}</p>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-indigo-600 h-2.5 rounded-full" style="width: ${skill.proficiency}%"></div>
      </div>
    `;
    container.appendChild(skillDiv);
  });
};
renderSkills(data.skills.frontend, "frontend-skills");
renderSkills(data.skills.backend, "backend-skills");
renderSkills(data.skills.other, "other-skills");

// Render Projects Section
const projectsContainer = document.getElementById("projects-container");
data.projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.className =
    "project-card bg-white rounded-lg overflow-hidden shadow-md";
  projectDiv.innerHTML = `
    <div class="relative overflow-hidden h-48">
      <img src="${project.image}" alt="${
    project.title
  }" class="w-full h-full object-cover transition duration-500 hover:scale-110">
      <div class="absolute inset-0 bg-indigo-600 opacity-0 hover:opacity-90 transition duration-500 flex items-center justify-center">
        <a href="${
          project.link
        }" class="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-full">Xem chi tiết</a>
      </div>
    </div>
    <div class="p-6 flex flex-col gap-2">
      <div class="flex flex-wrap gap-2">
        ${project.technologies
          .map(
            (tech) =>
              `<span class="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">${tech}</span>`
          )
          .join("")}
      </div>
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-gray-600 mb-4">${project.description}</p>
    </div>
  `;
  projectsContainer.appendChild(projectDiv);
});

// Render Contact Section
document.getElementById("contact-message").textContent = data.contact.message;
document.getElementById("contact-email").textContent = data.contact.email;
document.getElementById("contact-phone").textContent = data.contact.phone;
document.getElementById("contact-address").textContent = data.contact.address;

// Render Social Media Links (Contact Section)
const socialMediaContainer = document.getElementById("social-media");
const socialIcons = [
  { href: data.personal_info.social_media.facebook, icon: "fab fa-facebook-f" },
  { href: data.personal_info.social_media.instagram, icon: "fab fa-instagram" },
  { href: data.personal_info.social_media.tiktok, icon: "fab fa-tiktok" },
  { href: data.personal_info.social_media.github, icon: "fab fa-github" },
];
socialIcons.forEach((social) => {
  const a = document.createElement("a");
  a.href = social.href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className =
    "w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white transition duration-300";
  a.innerHTML = `<i class="${social.icon}"></i>`;
  socialMediaContainer.appendChild(a);
});

// Render Footer
document.getElementById("footer-name").textContent = data.personal_info.name;
document.getElementById("footer-title").textContent = data.personal_info.title;
const footerSocial = document.getElementById("footer-social");
socialIcons.forEach((social) => {
  const a = document.createElement("a");
  a.href = social.href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "text-gray-400 hover:text-white transition duration-300";
  a.innerHTML = `<i class="${social.icon}"></i>`;
  footerSocial.appendChild(a);
});
