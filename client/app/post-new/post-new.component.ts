import { Component, OnInit, Input } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {
  @Input() token;
  new_post = {
    title: '',
    content: '',
    status: 'publish'
  };

  constructor(
    private wpApiPosts: WpApiPosts
  ) { }

  ngOnInit() { }

  createPost() {
    const headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.token
    });

    this.wpApiPosts.create(this.new_post, { headers: headers })
      .toPromise()
      .then( response => {
        console.log(response);
      });
  }
}
