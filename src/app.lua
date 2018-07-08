-- requires with Lua style paths
local fu = require("fu")
local bar = require("fu.bar")
local jq = require("jq.uery")

-- requires with Node style relative paths
local fuNode = require("./fu/init.lua")
local barNode = require("./fu/bar.lua")
local jqNode = require("./jq/uery.lua")

-- require a node_modules package
local _ = require("jquery")

function dash() print("---------") end

-- use the jquery.ready
_():ready(function()
	dash()
	print("node_modules jquery.ready()")
	dash()
end)

print("Lua style requires")
fu()
bar()
jq()

dash()

print("Node style requires")
fuNode()
barNode()
jqNode()

dash()
print("Done")
