var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Function to form submission
function formSubmit(evt) {
    var _this = this;
    var _a;
    evt.preventDefault();
    var fNameElem = document.getElementById("fname");
    var contactElem = document.getElementById("contact");
    var emailElem = document.getElementById("email");
    var addressElem = document.getElementById("address");
    var yearElem = document.getElementById("year");
    var fieldElem = document.getElementById("field");
    var instituteElem = document.getElementById("institute");
    var jobElem = document.getElementById("job");
    var compElem = document.getElementById("comp");
    var sdateElem = document.getElementById("sdate");
    var edateElem = document.getElementById("edate");
    var skillElem = document.getElementById("skill");
    var objectiveElem = document.getElementById("objective");
    var picElem = document.getElementById("profile-pic");
    var link = document.getElementById("link");
    if (!fNameElem ||
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
        !link) {
        console.error("Elements are missing");
        return;
    }
    var fName = fNameElem.value;
    var contact = contactElem.value;
    var email = emailElem.value;
    var address = addressElem.value;
    var year = yearElem.value;
    var field = fieldElem.value;
    var institute = instituteElem.value;
    var job = jobElem.value;
    var comp = compElem.value;
    var sdate = sdateElem.value;
    var edate = edateElem.value;
    var skill = skillElem.value;
    var objective = objectiveElem.value;
    // -------------------------------------------------------
    // link
    var url = link.value;
    var urlAdress = "resumes/".concat(url.replace(/\s+/g, "_"), "_cv.html");
    // -------------------------------------------------------
    // profile pic
    var profPic = (_a = picElem.files) === null || _a === void 0 ? void 0 : _a[0];
    var profPicURL = profPic ? URL.createObjectURL(profPic) : "";
    // -------------------------------------------------------
    var resumeOutput = "\n<div class=\"left\">\n        <h1>Dynamic Resume</h1>\n         ".concat(profPicURL ? "<img src=\"".concat(profPicURL, "\" class=\"pic\" alt=\"\">") : " ", "\n        <div class=\"objective\">\n          <h3>Objective</h3>\n          <p class=\"editable\">").concat(objective, "</p>\n        </div>\n        <div class=\"social\">\n          <div class=\"l-email\">\n            <i class=\"fa-solid fa-envelope\"></i>\n            <p class=\"editable\">").concat(email, "</p>\n          </div>\n          <div class=\"l-contact\">\n            <i class=\"fa-solid fa-phone\"></i>\n            <p class=\"editable\">").concat(contact, "</p>\n          </div>\n          <div class=\"l-address\">\n            <i class=\"fa-solid fa-location-dot\"></i>\n            <p class=\"editable\">").concat(address, "</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"right\">\n        <h1 class=\"name editable\">").concat(fName, "</h1>\n        <div class=\"email\">\n          <i class=\"fa-solid fa-envelope\"></i>\n          <p class=\"editable\">").concat(email, "</p>\n        </div>\n        <div class=\"contact\">\n          <i class=\"fa-solid fa-phone\"></i>\n          <p class=\"editable\">").concat(contact, "</p>\n        </div>\n        <div class=\"address\">\n          <i class=\"fa-solid fa-location-dot\"></i>\n          <p class=\"editable\">").concat(address, "</p>\n        </div>\n\n        <hr />\n\n        <div class=\"edu\">\n          <h3>Education</h3>\n          <p class=\"editable\">").concat(year, "</p>\n          <p class=\"editable\">").concat(field, "</p>\n          <p class=\"editable\">").concat(institute, "</p>\n        </div>\n        <div class=\"exp\">\n          <h3>Experience</h3>\n          <p class=\"editable\">").concat(job, "</p>\n          <p class=\"editable\">").concat(comp, "</p>\n          <p>Start:<span id=\"edit-sdate\" class=\"editable\"> ").concat(sdate, "</span></p>\n          <p>End: <span id=\"edit-edate\" class=\"editable\">").concat(edate, " </span></p>\n        </div>\n        <div class=\"skill\">\n          <h3>Skill</h3>\n          <p class=\"skill editable\">").concat(skill, "</p>\n        </div>\n      </div>\n");
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
    var resumeOutputElem = document.getElementById("resume");
    if (resumeOutputElem) {
        resumeOutputElem.innerHTML = resumeOutput;
        // -----------------Creating--Download --Button------------------------------------
        var downloadbtn_1 = document.createElement("button");
        downloadbtn_1.textContent = "Download as PDF";
        var btnContainer = document.querySelector(".btns");
        btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.appendChild(downloadbtn_1);
        downloadbtn_1.setAttribute("class", "download");
        downloadbtn_1.addEventListener("click", function () {
            var form = document.getElementById("resume-form");
            form.style.display = "none";
            downloadbtn_1.style.display = "none";
            shareAblebtn_1.style.display = "none";
            editBtn1 === null || editBtn1 === void 0 ? void 0 : editBtn1.classList.remove("display");
            setTimeout(function () {
                window.print();
            }, 1000);
        });
        downloadbtn_1.classList.add("display");
        // ----------------Add sharebale link button------------------------------------
        var shareAblebtn_1 = document.createElement("button");
        shareAblebtn_1.textContent = "Copy Share Able Link";
        shareAblebtn_1.setAttribute("class", "sharebtn");
        shareAblebtn_1.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var shareAbleLink, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        shareAbleLink = "https://yourdomain.com/resumes/".concat(fName.replace(/\s+/g, "_"), "_cv.html");
                        return [4 /*yield*/, navigator.clipboard.writeText(shareAbleLink)];
                    case 1:
                        _a.sent();
                        alert("share able link copied to clipboard");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("Failed! ".concat(err_1));
                        alert("please Try again");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.appendChild(shareAblebtn_1);
        shareAblebtn_1.classList.add("display");
    }
    else {
        console.error("The resume output element is missing");
    }
    var editBtn1 = document.getElementById("edit-btn");
    editBtn1 === null || editBtn1 === void 0 ? void 0 : editBtn1.classList.add("display");
}
// ----------------Edit to Save and Save to edit----------------------------
function editBtn() {
    var editbtn = document.getElementById("edit-btn");
    if (!editbtn)
        return;
    var editableElem = document.querySelectorAll(".editable");
    if (editbtn.textContent === "Edit") {
        // change into edit
        editableElem.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editbtn.textContent = "Save";
    }
    else {
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
    var form = document.getElementById("resume-form");
    var editbtn = document.getElementById("edit-btn");
    if (form) {
        form.addEventListener("submit", formSubmit);
    }
    if (editbtn) {
        editbtn.addEventListener("click", editBtn);
    }
}
formSubmitDone();
