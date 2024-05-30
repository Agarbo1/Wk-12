// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    this.users[this.currentID] = {
      id: this.currentID,
      name
    }
    this.follows[this.currentID] = new Set()
    return this.currentID
  }

  getUser(userID) {
    if (this.users[userID] === undefined) return null;
    return this.users[userID]
  }

  follow(userID1, userID2) {
    if ((!this.users[userID1]) || (!this.users[userID2])) return false;
    let user1Follows = this.follows[userID1]
    user1Follows.add(userID2)
    return user1Follows.has(userID2);
  }

  getFollows(userID) {
    return this.follows[userID]
  }

  getFollowers(userID) {
    let followers = new Set()

    for (let user in this.follows) {
      if (this.follows[user].has(userID)) {
        let idNum = parseInt(user)
        followers.add(idNum)
      }
    }
    return followers
  }

  getRecommendedFollows(userID, degrees) {
    let queue = [[userID]]
    let visited = new Set();
    let recommended = [];

    while (queue.length) {
      let current = queue.shift()
      console.log(current, degrees)
      let id = current[current.length - 1]

      if (current.length > 2 && current.length <= degrees + 2) {
        if (!this.follows[userID].has(id) && id !== userID) {
          recommended.push(id)
        }
      }



      for (let neighbor of this.follows[id]) {

        if (!visited.has(neighbor)) {
          queue.push(current.concat([neighbor]))
          visited.add(neighbor)
        }

      }
    }
    return recommended
  }
}

module.exports = SocialNetwork;
