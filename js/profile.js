function uploadCoverPhoto(event) {
    const coverPhoto = document.getElementById('coverPhoto');
    coverPhoto.src = URL.createObjectURL(event.target.files[0]);
}

function uploadAvatar(event) {
    const avatar = document.getElementById('avatar');
    avatar.src = URL.createObjectURL(event.target.files[0]);
}

function saveProfile() {
    const bio = document.getElementById('bio').value;
    const profileName = document.querySelector('.profile-name').textContent;

    // Save profile data to local storage or a database
    const profileData = {
        profileName,
        bio
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile saved!');
}

// Load profile data on page load
document.addEventListener('DOMContentLoaded', () => {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        document.querySelector('.profile-name').textContent = profileData.profileName;
        document.getElementById('bio').value = profileData.bio;
    }
});
