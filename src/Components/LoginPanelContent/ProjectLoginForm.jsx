import React from 'react';

const ProjectLoginForm = () => {
  return (
    <form method="POST" action="">
      <h4 style={{ textAlign: 'center' }}>Project Login</h4>
      <div className="form-group">
        <label>Login Type:</label>
        <input type="text" name="type" className="form-control" value="Project" readOnly />
      </div>
      <div className="form-group">
        <label>Project Name:</label>
        <select name="project_name" className="form-control">
          <option selected disabled>Choose project Name</option>
          <optgroup label="Almora">
            <option value="Bhaisiyachana">Bhaisiyachana</option>
            <option value="Bhikiyasain">Bhikiyasain</option>
            <option value="Chaukhutiya">Chaukhutiya</option>
            <option value="Dhauladevi">Dhauladevi</option>
            <option value="Dwarahat">Dwarahat</option>
            <option value="Havalbag">Havalbag</option>
            <option value="Lamgarha">Lamgarha</option>
            <option value="Salt">Salt</option>
            <option value="Syalde">Syalde</option>
            <option value="Tadikhet">Tadikhet</option>
            <option value="Takula">Takula</option>
          </optgroup>
         
         <optgroup label="Bageshwar">
          <option value="Bageshwar">Bageshwar</option>
          <option value="Garud">Garud</option>
          <option value="Kapkot">Kapkot</option>
         </optgroup>

         <optgroup label="Chamoli">
            <option value="Dasoli">Dasoli</option>
            <option value="Dewal">Dewal</option>
            <option value="Gairsain">Gairsain</option>
            <option value="Ghat">Ghat</option>
            <option value="Joshimath">Joshimath</option>
            <option value="Karnprayag">Karnprayag</option>
            <option value="Narayanbagar">Narayanbagar</option>
            <option value="Pokhari">Pokhari</option>
            <option value="Tharali">Tharali</option>
        </optgroup>
        <optgroup label="Champawat">
            <option value="Barakot">Barakot</option>
            <option value="Champawat">Champawat</option>
            <option value="Lohaghat">Lohaghat</option>
            <option value="Paati">Paati</option>
        </optgroup>
        <optgroup label="Dehradun">
            <option value="Chakrata">Chakrata</option>
            <option value="Dehradun City">Dehradun City</option>
            <option value="Doiwala">Doiwala</option>
            <option value="Kalsi">Kalsi</option>
            <option value="Raipur">Raipur</option>
            <option value="Sahaspur">Sahaspur</option>
            <option value="Vikasnagar">Vikasnagar</option>
        </optgroup>
        <optgroup label="Haridwar">
            <option value="Bahadarabad01">Bahadarabad01</option>
            <option value="Bahadarabad02">Bahadarabad02</option>
            <option value="Bhagwanpur">Bhagwanpur</option>
            <option value="Haridwar City">Haridwar City</option>
            <option value="Khanpur">Khanpur</option>
            <option value="Laksar">Laksar</option>
            <option value="Manglore">Manglore</option>
            <option value="Narsan">Narsan</option>
            <option value="Roorkeecity">Roorkeecity</option>
            <option value="Roorkee01">Roorkee01</option>
            <option value="Roorkee02">Roorkee02</option>
        </optgroup>
        <optgroup label="Nanital">
            <option value="Betalghat">Betalghat</option>
            <option value="Bheemtal">Bheemtal</option>
            <option value="Dhari">Dhari</option>
            <option value="Haldwani Rural">Haldwani Rural</option>
            <option value="Haldwani Urban">Haldwani Urban</option>
            <option value="Kotabag">Kotabag</option>
            <option value="Okhalkanda">Okhalkanda</option>
            <option value="Ramgarh">Ramgarh</option>
            <option value="Ramnagar">Ramnagar</option>
        </optgroup>
        <optgroup label="Pauri Garhwal">
            <option value="Beeronkhal">Beeronkhal</option>
            <option value="Dugadda">Dugadda</option>
            <option value="Dwarikhal">Dwarikhal</option>
            <option value="Ekeshwar">Ekeshwar</option>
            <option value="Jaiharikhal">Jaiharikhal</option>
            <option value="Kaljikhal">Kaljikhal</option>
            <option value="Khirsu">Khirsu</option>
            <option value="Kot">Kot</option>
            <option value="Nainidanda">Nainidanda</option>
            <option value="Pabau">Pabau</option>
            <option value="Pauri">Pauri</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Rikhnikhal">Rikhnikhal</option>
            <option value="Thalisain">Thalisain</option>
            <option value="Yamkeshwar">Yamkeshwar</option>
        </optgroup>
        <optgroup label="Pithoragarh">
            <option value="Berinag">Berinag</option>
            <option value="Dharchula">Dharchula</option>
            <option value="Didihat">Didihat</option>
            <option value="Gangolihat">Gangolihat</option>
            <option value="Kanalichhina">Kanalichhina</option>
            <option value="Munakot">Munakot</option>
            <option value="Munsiari">Munsiari</option>
            <option value="Pithoragarh">Pithoragarh</option>
        </optgroup>
        <optgroup label="Rudraprayag">
            <option value="Agastymuni">Agastymuni</option>
            <option value="Jakholi">Jakholi</option>
            <option value="Ukhimath">Ukhimath</option>
        </optgroup>
        <optgroup label="Tehri Garhwal">
            <option value="Bhilangana">Bhilangana</option>
            <option value="Chamba">Chamba</option>
            <option value="Hindolakhal">Hindolakhal</option>
            <option value="Jakhanidhar">Jakhanidhar</option>
            <option value="Kirtinagar">Kirtinagar</option>
            <option value="Narendranagar">Narendranagar</option>
            <option value="Pratapnagar">Pratapnagar</option>
            <option value="Thatyur">Thatyur</option>
            <option value="Thauldhar">Thauldhar</option>
        </optgroup>
        <optgroup label="Usnagar">
            <option value="Bazpur">Bazpur</option>
            <option value="Gadarpur">Gadarpur</option>
            <option value="Jaspur Rural">Jaspur Rural</option>
            <option value="Jaspur Urban">Jaspur Urban</option>
            <option value="Kashipur Rural">Kashipur Rural</option>
            <option value="Kashipur Urban">Kashipur Urban</option>
            <option value="Khatima">Khatima</option>
            <option value="Rudrapur Rural">Rudrapur Rural</option>
            <option value="Rudrapur Urban">Rudrapur Urban</option>
            <option value="Sitarganj">Sitarganj</option>
        </optgroup>
        <optgroup label="Uttarkashi">
            <option value="Bhatwari">Bhatwari</option>
            <option value="Chinyalisaur">Chinyalisaur</option>
            <option value="Dunda">Dunda</option>
            <option value="Mori">Mori</option>
            <option value="Naugaon">Naugaon</option>
            <option value="Purola">Purola</option>
        </optgroup>
        </select>
      </div>
      <div className="form-group">
        <label>Login Password:</label>
        <input type="password" name="password" className="form-control" required pattern="[^'\x22]+" title="Invalid input" />
      </div>
      <div className="form-group">
        <button type="submit" name="project_login" className="btn btn-info">Login</button>
      </div>
    </form>
  );
};

export default ProjectLoginForm;
