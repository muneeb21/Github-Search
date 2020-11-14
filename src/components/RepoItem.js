import '../style.css';
import { Button,Card, Icon } from 'semantic-ui-react';

function RepoItem(props) {
  const {
    html_url,size,name,description,forks,open_issues,language
  }=props.repo;
    return(
       
      <a href={html_url} target="_blank">
        <Card fluid color="blue" >
         <Card.Content >
        <Card.Header  >{name}</Card.Header>
        <Card.Meta>{language}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <div>
          <a>
            <Icon name='code' />
            {forks} Forks
          </a>
          </div>
          <div>
          <a>
            <Icon name='code' />
            {open_issues} Issues
            
          </a>
          <Button color="blue" inverted floated="right">
            Like
          </Button>
          </div>
          <div>
          <a>
            <Icon name='code' />
            Size: {size} 
          </a>
          </div>
          
        </Card.Content>
    </Card>
       </a>
  );
}

export default RepoItem;
