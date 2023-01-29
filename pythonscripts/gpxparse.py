
from datetime import datetime 

gpxfile = open("./gpxfiles/Church_of_the_holy_trail_.gpx")

lines = gpxfile.read().split("\n")
elevation_values = []
time_values= []
for each in lines:
    if(each.strip()[0:5] == "<ele>"):
        elevation = each.strip()[5:-6]
        elevation_values.append(float(elevation))
    if(each.strip()[0:6] == "<time>"):
        time = each.strip()[6:-8]
        # print(time)
        datetime_object = datetime.strptime(time, '%Y-%m-%dT%H:%M:%S')
        # print(datetime_object)
        time_values.append(datetime_object)

import matplotlib.pyplot as plt

x_axis = time_values
y_axis = elevation_values

#lets calcylate the largest climb
largest_climb = 0
elevation_gain = 0
previous_elevation = elevation_values[0]
net_gain = 0
for current_elevation in elevation_values:
    if(current_elevation >= previous_elevation):
        elevation_gain += current_elevation - previous_elevation
        net_gain += current_elevation - previous_elevation
    else:
        #means climb is over
        if(largest_climb < elevation_gain):
            largest_climb = elevation_gain
        elevation_gain = 0
    previous_elevation = current_elevation

print(largest_climb)
print(net_gain)

plt.plot(x_axis[0:-1], y_axis)
plt.xlabel('Time')
plt.ylabel('Elevation')
# plt.show()
