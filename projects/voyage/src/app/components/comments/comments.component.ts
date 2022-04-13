import { Component, Input, OnInit } from '@angular/core';
import {Comment, CommentType} from '../../interfaces/voyage.types';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: Comment[];
  commentType = Object.values(CommentType);

  commentForm = this.formbuilder.group({
    commentType: ['', Validators.required],
    comment: ['', Validators.required],
  });

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    // call API and on successful response update comments
    this.comments.push({
      id: Math.floor(Math.random() * 100),
      daStage: 'PDA',
      persona: 'BACKOFFICE',
      author: 'john snow',
      comment: this.commentForm.controls['comment'].value,
      type: this.commentForm.controls['commentType'].value,
      date: (new Date()).toDateString(),
    })
    this.commentForm.reset({commentType: '', comment: ''});
    console.log(this.comments);
  }

  onDelete(selectedComment: Comment) {
    const index = this.comments.findIndex(comment => comment.id === selectedComment.id);
    this.comments.splice(index, 1);
  }
}
