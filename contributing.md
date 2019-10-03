# Contributing to Movie Mania #

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Add a new movie ##

- Fork this repository
- Clone it to your local machine
- Create a new branch
- Add the new movie in [coredata.json](https://github.com/Shafran123/movie_mania/blob/master/public/coredata.json)
- Add a new entry in the `movies` array
```javascript
{
	"id": <<int>>, // Id of the movie, must be an integer, and must not be repeated
	"title": <<string>>, // Name of the movie, must be a string
	"type": <<string>>, // Type of the node, must be a string
	"year": <<int>>, // Year the movie was released, must be an integer
	"tag_1" : <<string>>, // Tag one for the movie, must be a string
	"tag_2" : <<string>>, // Tag two for the movie, must be a string
	"cover_img" : <<url>>  // URL to the movie poster, must be a string in the format of a URL
}
```
- Commit your changes
- Create a PR and ask for a review from the repository owners

## Code of Conduct ##

### Our Pledge ###

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards ###

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities ###

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope ###

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement ###

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team. All complaints will be reviewed
and investigated and will result in a response that is deemed necessary
and appropriate to the circumstances. The project team is obligated to
maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution ###

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/