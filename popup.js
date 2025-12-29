// Device data structure: categories, subcategories, and device models with screen dimensions
const devices = {
  "Mobile Devices": {
    "Apple iPhones": [
      { name: "iPhone 3GS", portrait: { width: 320, height: 480 }, landscape: { width: 480, height: 320 } },
      { name: "iPhone 4/4S", portrait: { width: 320, height: 480 }, landscape: { width: 480, height: 320 } },
      { name: "iPhone 5/5S", portrait: { width: 320, height: 568 }, landscape: { width: 568, height: 320 } },
      { name: "iPhone 6/6S", portrait: { width: 375, height: 667 }, landscape: { width: 667, height: 375 } },
      { name: "iPhone 7/8", portrait: { width: 375, height: 667 }, landscape: { width: 667, height: 375 } },
      { name: "iPhone X/XR/XS", portrait: { width: 375, height: 812 }, landscape: { width: 812, height: 375 } },
      { name: "iPhone 11/12/13", portrait: { width: 390, height: 844 }, landscape: { width: 844, height: 390 } },
      { name: "iPhone 12 Pro Max/13 Pro Max", portrait: { width: 430, height: 932 }, landscape: { width: 932, height: 430 } },
      { name: "iPhone 14/15 Series", portrait: { width: 430, height: 932 }, landscape: { width: 932, height: 430 } }
    ],
    "Samsung Galaxy": [
      { name: "Galaxy S2", portrait: { width: 360, height: 640 }, landscape: { width: 640, height: 360 } },
      { name: "Galaxy S3", portrait: { width: 360, height: 640 }, landscape: { width: 640, height: 360 } },
      { name: "Galaxy S4/S5", portrait: { width: 360, height: 640 }, landscape: { width: 640, height: 360 } },
      { name: "Galaxy S6/S7", portrait: { width: 360, height: 640 }, landscape: { width: 640, height: 360 } },
      { name: "Galaxy S8/S9", portrait: { width: 412, height: 915 }, landscape: { width: 915, height: 412 } },
      { name: "Galaxy S10/S20", portrait: { width: 412, height: 915 }, landscape: { width: 915, height: 412 } },
      { name: "Galaxy S21/S22/S23", portrait: { width: 412, height: 915 }, landscape: { width: 915, height: 412 } },
      { name: "Galaxy Note Series", portrait: { width: 412, height: 915 }, landscape: { width: 915, height: 412 } }
    ],
    "Google Pixel": [
      { name: "Pixel 1st Gen", portrait: { width: 412, height: 732 }, landscape: { width: 732, height: 412 } },
      { name: "Pixel 2/3", portrait: { width: 412, height: 732 }, landscape: { width: 732, height: 412 } },
      { name: "Pixel 4/5", portrait: { width: 393, height: 851 }, landscape: { width: 851, height: 393 } },
      { name: "Pixel 6/7/8", portrait: { width: 412, height: 915 }, landscape: { width: 915, height: 412 } }
    ]
  },
  "Tablets": {
    "Apple iPads": [
      { name: "iPad 2", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "iPad 3/4", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "iPad Air", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "iPad Mini", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "iPad Pro (9.7\")", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "iPad Air 2 / iPad Pro (10.5\")", portrait: { width: 810, height: 1080 }, landscape: { width: 1080, height: 810 } },
      { name: "iPad Pro 11\"", portrait: { width: 834, height: 1194 }, landscape: { width: 1194, height: 834 } },
      { name: "iPad Pro 12.9\"", portrait: { width: 1024, height: 1366 }, landscape: { width: 1366, height: 1024 } }
    ],
    "Samsung Galaxy Tabs": [
      { name: "Galaxy Tab 2", portrait: { width: 600, height: 1024 }, landscape: { width: 1024, height: 600 } },
      { name: "Galaxy Tab S2", portrait: { width: 768, height: 1024 }, landscape: { width: 1024, height: 768 } },
      { name: "Galaxy Tab S6/S7", portrait: { width: 800, height: 1280 }, landscape: { width: 1280, height: 800 } },
      { name: "Galaxy Tab S8/S9", portrait: { width: 800, height: 1280 }, landscape: { width: 1280, height: 800 } }
    ]
  },
  "Desktops & Laptops": {
    "MacBook Series": [
      { name: "MacBook (13-inch)", portrait: { width: 1280, height: 800 } },
      { name: "MacBook Pro (15-inch)", portrait: { width: 1440, height: 900 } },
      { name: "MacBook Air (13-inch)", portrait: { width: 1440, height: 900 } },
      { name: "MacBook Pro (16-inch)", portrait: { width: 3072, height: 1920 } }
    ],
    "Desktop Monitors": [
      { name: "Full HD (1080p)", portrait: { width: 1920, height: 1080 } },
      { name: "Quad HD (1440p)", portrait: { width: 2560, height: 1440 } },
      { name: "4K", portrait: { width: 3840, height: 2160 } },
      { name: "5K", portrait: { width: 5120, height: 2880 } }
    ]
  }
};

// Get references to dropdown elements
const categorySelect = document.getElementById("categorySelect");
const subcategorySelect = document.getElementById("subcategorySelect");
const deviceSelect = document.getElementById("deviceSelect");

// Populate the category dropdown on DOM load
document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
});

// Populate categories
function populateCategories() {
  categorySelect.innerHTML = "";
  Object.keys(devices).forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
  // Trigger subcategory population for the first category
  populateSubcategories(categorySelect.value);
}

// Populate subcategories based on selected category
function populateSubcategories(category) {
  subcategorySelect.innerHTML = "";
  const subcategories = Object.keys(devices[category]);
  subcategories.forEach(sub => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
  // Trigger device population for the first subcategory
  populateDevices(category, subcategorySelect.value);
}

// Populate device models based on selected subcategory
function populateDevices(category, subcategory) {
  deviceSelect.innerHTML = "";
  devices[category][subcategory].forEach((device, index) => {
    const option = document.createElement("option");
    option.value = index; // Use the index as the value
    option.textContent = device.name;
    deviceSelect.appendChild(option);
  });
}

// Listen for category change
categorySelect.addEventListener("change", function() {
  populateSubcategories(this.value);
});

// Listen for subcategory change
subcategorySelect.addEventListener("change", function() {
  populateDevices(categorySelect.value, this.value);
});

// Test button event listener
document.getElementById("testBtn").addEventListener("click", function () {
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;
  const deviceIndex = deviceSelect.value;
  const orientation = document.querySelector('input[name="orientation"]:checked').value;
  
  const selectedDevice = devices[category][subcategory][deviceIndex];
  // Use the selected orientation, falling back to portrait if necessary
  let dimensions = selectedDevice[orientation] || selectedDevice.portrait;
  
  // Retrieve the URL of the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentUrl = tabs[0].url;
    // Open a new popup window with the current URL and specified dimensions, centered on screen
    chrome.windows.create({
      url: currentUrl,
      type: "popup",
      width: dimensions.width,
      height: dimensions.height,
      left: Math.floor((screen.availWidth - dimensions.width) / 2),
      top: Math.floor((screen.availHeight - dimensions.height) / 2)
    });
  });
});
