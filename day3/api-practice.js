// https://jsonplaceholder.typicode.com/users

// baseUrl = https://jsonplaceholder.typicode.com/

// user리스트: /users
// 특정 user가 쓴 게시글 /users/<user_id>/posts
// 특정 user가 쓴 댓글 /users/<user_id>/comments
// 특정 user의 todo /users/<user_id>/todo
 
// 1.function을 만들자

// 위 API만 이용해서
// username을 입력받아, 

// - user의 정보
// - user가 쓴 게시글, 
// - user가 쓴 댓글
// - user의 todo
// 를 모두 조회하는 함수를 작성

// fetch(url): Promise<Response>
// 1. function getUserByUsername(username) 함수 정의
// - /users에 fetch => username에 맞는 obj 출력

// 2. function getUserPostByUserId(userId) 함수 정의
    // - /users${userId}/posts에 fetch
    // 데이터를 받아서 해당하는 post(배열) 출력

// 3. function getUserInfoByUsername(username) 함수 정의
// - username을 받아서 user의 posts, comments, todo, user object모두 출력

const getUserInfoByName = async(name) => {
    const arr = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    })

    console.log(arr.find(x => x.name === name))
}


getUserInfoByName("Leanne Graham");

const getUserPostByUserId = async(userId) => {
    const arr = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json()
    })

    console.log(arr.filter(x => x.id === userId))
}

getUserPostByUserId(1);

const getUserInfoByUsername = async(username) => {
    const userId = getUserInfoByName(username).id
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((response) => {
        return response.json()
    })
    console.log(posts);

    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`).then((response) => {
        return response.json()
    })
    
    console.log(comments)

    const todos = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then((response) => {
        return response.json()
    })

    console.log(todos)

    const userInfo = await getUserInfoByName(username)

    console.log(userInfo)
}

getUserInfoByUsername('Leanne Graham')