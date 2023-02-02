Stack = {}
Stack.__index = Stack

function Stack.new()
  local stack = {}
  setmetatable(stack, Stack)
  stack.items = {}
  return stack
end

function Stack:find(element)
  for i, item in ipairs(self.items) do
    if item == element then
      return i
    end
  end
  return nil
end

function Stack:push(element)
  table.insert(self.items, element)
end

function Stack:pop()
  return table.remove(self.items)
end

function Stack:size()
  return #self.items
end

function Stack:isEmpty()
  return self:size() == 0
end