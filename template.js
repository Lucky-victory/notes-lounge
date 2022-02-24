export const template=`
     <div class='delete-btn-wrapper'>
     <button type='button' class='delete-btn'>
     <span class='material-icons-outlined'>delete</span>
     </button>
     <span class='delete-count'></span>
     </div>
     <div class='search-box-wrapper'><input type='search' placeholder='Search Notes' class='search-box'/></div>
     <div class="all-notes-container"></div>
     
     <div class='new-container'>
     <div class='new-container-inner'>
        <button type='button' class='back-home-btn'>
  
           <span class='material-icons-outlined'>west </span>
        </button>
        <input type='checkbox' class='preview-checkbox' />
     </div>
       <div class='new-note-container'>
         <div class='new-note-container-inner'>
           <div class="form-group">
              <input type="text" class="new-note-title" id="new_note_title" placeholder="Title"/>
           </div>
           <textarea id="new_note_body" class="new-note-body" placeholder="Note" value=""></textarea>
        </div>
        <div class='edit-time-wrapper'><span class='edit-time'></span></div>
         </div>
     </div>   
  </div>
   <div class="bottom-nav">
      
   <button class="create-note-btn" id="add_new_note_btn" >
         <span class="btn-title">create note</span>
         <span class="btn-icon"></span>
   </button>
      
`;

