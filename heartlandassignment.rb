require 'date'

def solution(string)
    photos = string.strip.split("\n")
    photo_info = []
  
    photos.each_with_index do |photo, index|
      parts = photo.split(", ")
      name, city, datetime = parts[0], parts[1], parts[2..3].join(" ")
      photo_info.push([name, city, DateTime.parse(datetime), index])
    end
  
    city_groups = photo_info.group_by { |(_, city, _, _)| city }
  
    end_result = []
  
    city_groups.each do |city, group|
      group.sort_by! { |(_, _, datetime, _)| datetime }
      max_number_length = group.size.to_s.length
  
      group.each_with_index do |(name, _, _, orig_index), index|
        extension = name.split(".").last
        new_city_name = "#{city}#{(index + 1).to_s.rjust(max_number_length, '0')}.#{extension}"
        end_result[orig_index] = new_city_name
      end
    end
  
    end_result.join("\n")
  end

input = "photo.jpg, Krakow, 2013-09-05 14:08:15
  Mike.png, London, 2015-06-20 15:13:22
  myFriends.png, Krakow, 2013-09-05 14:07:13
  Eiffel.jpg, Florianopolis, 2015-07-23 08:03:02
  pisatower.jpg, Florianopolis, 2015-07-22 23:59:59
  BOB.jpg, London, 2015-08-05 00:02:03
  notredame.png, Florianopolis, 2015-09-01 12:00:00
  me.jpg, Krakow, 2013-09-06 15:40:22
  a.png, Krakow, 2016-02-13 13:33:50
  b.jpg, Krakow, 2016-01-02 15:12:22
  c.jpg, Krakow, 2016-01-02 14:34:30
  d.jpg, Krakow, 2016-01-02 15:15:01
  e.png, Krakow, 2016-01-02 09:49:09
  f.png, Krakow, 2016-01-02 10:55:32
  g.jpg, Krakow, 2016-02-29 22:13:11"

answer = solution(input)
print answer
  