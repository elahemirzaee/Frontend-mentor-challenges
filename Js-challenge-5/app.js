const jobListing = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];


const tagActiveClass = 'tag--active';
const tagClass = 'tag';
const closeTagClass = 'close--tag';

function getTagHTML(tag, tagClass = 'tag') { return `<span class="${tagClass}">${tag}</span>`;};


function getJobListingHTML(jobData, filterTags = []) {
  const jobTagsPlaceHolder = '###JOB_TAGS###';
  console.log('jobs', jobData);
  let jobListingHTML = `<div class="jobs__item"><div class="jobs__column jobs__column--left"><img src="${jobData.logo}" alt="${jobData.company}" class="jobs__img"><div class="jobs__info"><span class="jobs__company">${jobData.company}</span><span class="jobs__title">${jobData.position}</span><ul class="jobs__detail"><li class="jobs__detail--item">${jobData.postedAt}</li><li class="jobs__detail--item">${jobData.contract}</li><li class="jobs__detail--item">${jobData.location}</li></ul></div></div><div class="jobs__column jobs__column--right">${jobTagsPlaceHolder}</div></div>`;

  // console.log('jobData', jobData.tools);

  const tagsList = [
    jobData.role,
    jobData.level,
    ...(jobData.languages || []),
    ...(jobData.tools || [])
  ];

  const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
  const passesFilter = !filterTags.length || filterTags.every(tag => (
    tagsListLowercase.includes(tag && tag.toLowerCase())
  ));

  if(!passesFilter) {
    return '';
  }

  const tagStrings = tagsList.reduce((acc, currentTag) => {
    const activeClass = (filterTags.includes(currentTag) && tagActiveClass) || '';
    return acc + getTagHTML(currentTag, `${tagClass} ${activeClass}`);
    }, '');

  return jobListingHTML.replace(jobTagsPlaceHolder, tagStrings);
};



function toggleClass(el, className) {
  if(el.classList.contains(className)) {
    el.classList.remove(className);

    return;
  }
    el.classList.add(className);
}


function getSearchBarTags(tagValue, searchContentEl) {

  let searchBarTags = Array.from(searchContentEl.children).map(node => node.innerHTML && node.innerHTML.trim()).filter(tag => !!tag);

  // console.log('search bar tags', searchBarTags, tagValue);

  if(searchBarTags.includes(tagValue)) {
    searchBarTags = searchBarTags.filter(tag => tag !== tagValue)
  }else {
    searchBarTags = [...searchBarTags, tagValue];
  }
  return searchBarTags;
  // searchContentEl.innerHTML = searchBarTags.reduce((acc, currentTag) => {
  //   return acc + getTagHTML(currentTag, 'close--tag');
  // }, '');
}

function setJobListings(filterTags) {
  const jobListingsHTML = jobListing.reduce((acc, currentListing) => {
    return acc + getJobListingHTML(currentListing, filterTags);
  }, '');

  document.getElementById('jobs').innerHTML = jobListingsHTML;
}

function displaySearchWrapper(display = false) {
  const searchWrapper = document.getElementById('search');
  
  if(display) {
    searchWrapper.classList.remove('search--hidden');

    return;
  }
  searchWrapper.classList.add('search--hidden');
}

function setSearchbarContent(searchContentEl, tags) {
  searchContentEl.innerHTML = tags.reduce((acc, currentTag) => {
      return acc + getTagHTML(currentTag, closeTagClass);
  }, '');
}

function resetState(searchContentEl) {
  searchContentEl.innerHTML = '';
  setJobListings();
  displaySearchWrapper(false);
  toggleClass(targetEl, tagActiveClass);
}

document.addEventListener('click', (even) => {
  const targetEl = event.target;
  const targetText = targetEl.innerHTML.trim();
  const searchContentEl = document.getElementById('search__content');
  const searchBarTags= getSearchBarTags(targetText, searchContentEl);

  // if(!tagClasses.some(c => targetEl.classList.contains(c))) {
  //   return;
  // }
  if(targetEl.id === 'clear' || !searchBarTags.length) {
    resetState(searchContentEl);
  }

  if (![tagClass, closeTagClass].some(c => targetEl.classList.contains(c))) {
    return;
}

  setSearchbarContent(searchContentEl, searchBarTags);

  displaySearchWrapper(searchBarTags.length > 0);

  toggleClass(targetEl, 'tag--active');

  setJobListings(searchBarTags);

});
setJobListings();