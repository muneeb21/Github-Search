import React from 'react'
import { Button,Card, Icon, Image } from 'semantic-ui-react';
import '../style.css';

function GithubCard(props) {
  const {
    html_url,name,avatar_url,login,followers,following,public_repos
  }=props.user;
    return(
      <a href={html_url} target="_blank">
        <Card color="blue">
        <Image src={avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
        <span className='date'>{login}</span>
      </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
          <a>
            <Icon name='github' />
            {public_repos} Repos
          </a>
          </div>
          <div>
          <a>
            <Icon name='user' />
            {followers} Followers
          </a>
          </div>
          <div>
          <a>
            <Icon name='user' />
            {following} Following
            
          </a>
          <Button color="green" inverted floated="right">
            Follow
          </Button>
          </div>
        </Card.Content>
      </Card>
      </a>
  );
}

export default GithubCard;
