// Function to form submission
function formSubmit(evt) {
  evt.preventDefault();
  let fNameElem = document.getElementById("fname") as HTMLInputElement;
  let contactElem = document.getElementById("contact") as HTMLInputElement;
  let emailElem = document.getElementById("email") as HTMLInputElement;
  let addressElem = document.getElementById("address") as HTMLInputElement;
  let yearElem = document.getElementById("year") as HTMLInputElement;
  let fieldElem = document.getElementById("field") as HTMLInputElement;
  let instituteElem = document.getElementById("institute") as HTMLInputElement;
  let jobElem = document.getElementById("job") as HTMLInputElement;
  let compElem = document.getElementById("comp") as HTMLInputElement;
  let sdateElem = document.getElementById("sdate") as HTMLInputElement;
  let edateElem = document.getElementById("edate") as HTMLInputElement;
  let skillElem = document.getElementById("skill") as HTMLInputElement;
  let objectiveElem = document.getElementById("objective") as HTMLInputElement;
  let picElem = document.getElementById("profile-pic") as HTMLInputElement;
  let link = document.getElementById("link") as HTMLInputElement;

  if (
    !fNameElem ||
    !contactElem ||
    !emailElem ||
    !addressElem ||
    !yearElem ||
    !fieldElem ||
    !instituteElem ||
    !jobElem ||
    !compElem ||
    !sdateElem ||
    !edateElem ||
    !skillElem ||
    !objectiveElem ||
    !picElem ||
    !link
  ) {
    console.error("Elements are missing");
    return;
  }
  const fName = fNameElem.value;
  const contact = contactElem.value;
  const email = emailElem.value;
  const address = addressElem.value;
  const year = yearElem.value;
  const field = fieldElem.value;
  const institute = instituteElem.value;
  const job = jobElem.value;
  const comp = compElem.value;
  const sdate = sdateElem.value;
  const edate = edateElem.value;
  const skill = skillElem.value;
  const objective = objectiveElem.value;
  // -------------------------------------------------------
  // link
  const url = link.value;
  const urlAdress = `resumes/${url.replace(/\s+/g, "_")}_cv.html`;
  // -------------------------------------------------------
  // profile pic
  const profPic = picElem.files?.[0];
  const profPicURL = profPic ? URL.createObjectURL(profPic) : "";
  // -------------------------------------------------------
  let resumeOutput = `
<div class="left">
        <h1>Dynamic Resume</h1>
         ${profPicURL ? `<img src="${profPicURL}" class="pic" alt="">` : " "}
        <div class="objective">
          <h3>Objective</h3>
          <p class="editable">${objective}</p>
        </div>
        <div class="social">
          <div class="l-email">
            <i class="fa-solid fa-envelope"></i>
            <p class="editable">${email}</p>
          </div>
          <div class="l-contact">
            <i class="fa-solid fa-phone"></i>
            <p class="editable">${contact}</p>
          </div>
          <div class="l-address">
            <i class="fa-solid fa-location-dot"></i>
            <p class="editable">${address}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <h1 class="name editable">${fName}</h1>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <p class="editable">${email}</p>
        </div>
        <div class="contact">
          <i class="fa-solid fa-phone"></i>
          <p class="editable">${contact}</p>
        </div>
        <div class="address">
          <i class="fa-solid fa-location-dot"></i>
          <p class="editable">${address}</p>
        </div>

        <hr />

        <div class="edu">
          <h3>Education</h3>
          <p class="editable">${year}</p>
          <p class="editable">${field}</p>
          <p class="editable">${institute}</p>
        </div>
        <div class="exp">
          <h3>Experience</h3>
          <p class="editable">${job}</p>
          <p class="editable">${comp}</p>
          <p>Start:<span id="edit-sdate" class="editable"> ${sdate}</span></p>
          <p>End: <span id="edit-edate" class="editable">${edate} </span></p>
        </div>
        <div class="skill">
          <h3>Skill</h3>
          <p class="skill editable">${skill}</p>
        </div>
      </div>
`;
  // -------------------------------------------------------
  // const downloadLink = document.createElement("a");
  // downloadLink.href =
  //   "data:text/html;charset = utf-8" + encodeURIComponent(resumeOutput);
  // downloadLink.download = urlAdress;
  // downloadLink.textContent = "Download Resume";
  // downloadLink.setAttribute("class", "download");
  // // --------download able link--------

  // let downloadBtn = document.querySelector(".btns");
  // downloadBtn.appendChild(downloadLink);
  // -------------------------------------------------------
  let resumeOutputElem = document.getElementById("resume");
  if (resumeOutputElem) {
    resumeOutputElem.innerHTML = resumeOutput;
    // -----------------Creating--Download --Button------------------------------------
    let downloadbtn = document.createElement("button");
    downloadbtn.textContent = "Download as PDF";
    let btnContainer = document.querySelector(".btns");
    btnContainer?.appendChild(downloadbtn);
    downloadbtn.setAttribute("class", "download");

    downloadbtn.addEventListener("click", () => {
      let form = document.getElementById("resume-form") as HTMLElement;
      form.style.display = "none";
      downloadbtn.style.display = "none";
      shareAblebtn.style.display = "none";
      editBtn1?.classList.remove("display");
      setTimeout(() => {
        window.print();
      }, 1000);
    });
    downloadbtn.classList.add("display");

    // ----------------Add sharebale link button------------------------------------
    const shareAblebtn = document.createElement("button");
    shareAblebtn.textContent = "Copy Share Able Link";
    shareAblebtn.setAttribute("class", "sharebtn");
    shareAblebtn.addEventListener("click", async () => {
      try {
        const shareAbleLink = `https://yourdomain.com/resumes/${fName.replace(
          /\s+/g,
          "_"
        )}_cv.html`;

        await navigator.clipboard.writeText(shareAbleLink);
        alert("share able link copied to clipboard");
      } catch (err) {
        console.error(`Failed! ${err}`);
        alert("please Try again");
      }
    });
    btnContainer?.appendChild(shareAblebtn);
    shareAblebtn.classList.add("display");
  } else {
    console.error("The resume output element is missing");
  }
  let editBtn1 = document.getElementById("edit-btn");
  editBtn1?.classList.add("display");
}

// ----------------Edit to Save and Save to edit----------------------------

function editBtn() {
  let editbtn = document.getElementById("edit-btn");
  if (!editbtn) return;
  let editableElem = document.querySelectorAll(".editable");
  if (editbtn.textContent === "Edit") {
    // change into edit
    editableElem.forEach(function (element) {
      if (element instanceof HTMLElement) {
        element.contentEditable = "true";
        element.classList.add("editing");
      }
    });
    editbtn.textContent = "Save";
  } else {
    // change again  into save
    editableElem.forEach(function (element) {
      if (element instanceof HTMLElement) {
        element.contentEditable = "false";
        element.classList.remove("editing");
      }
    });
    editbtn.textContent = "Edit";
  }
}

// applying event listeners
function formSubmitDone() {
  let form = document.getElementById("resume-form");
  let editbtn = document.getElementById("edit-btn");
  if (form) {
    form.addEventListener("submit", formSubmit);
  }

  if (editbtn) {
    editbtn.addEventListener("click", editBtn);
  }
}

formSubmitDone();
