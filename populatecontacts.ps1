[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

ForEach($i in 1..100){
    $data = @{
        id = $i
        username = "donjohn"
        name = "Don Johnson"
        github = "http://www.github.com/profile"
        twitter = "http://www.twitter.com/myprofile"
        linkedin = "http://www.linkedin.com/in/myprofile"
        picture = "http://www.mypicture.com/picture.jpg"
        website = "http://www.google.com"
        summary = "asdfadsfadsfadsfasdfasdfasdfasdfasdfasdf dsfasdf adsfasdf adsfasdf asdfads fasdfadsf"
        email = "asdfasdf@adfsasdfa.com"
    }

    $json = ConvertTo-Json $data

    Invoke-WebRequest -Uri "https://localhost:8001/api/contacts" -Method "POST" -Body $json -ContentType "application/json" 
}