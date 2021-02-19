/**
 * @description 递归获取所有子菜单
 * */
function getAllSiderMenu (menuList) {
  let allMenus = [];

  menuList.forEach(menu => {
    if (menu.children && menu.children.length) {
      const menus = getMenuChildren(menu);
      menus.forEach(item => allMenus.push(item));
    } else {
      allMenus.push(menu);
    }
  });

  return allMenus;
}

function getMenuChildren (menu) {
  if (menu.children && menu.children.length) {
    return menu.children.reduce((all, item) => {
      const foundChildren = getMenuChildren(item);
      return all.concat(foundChildren);
    }, []);
  } else {
    return [menu];
  }
}

export { getAllSiderMenu };

/**
 * @description 判断列表1中是否包含了列表2中的某一项
 * 因为用户权限 access 为数组，includes 方法无法直接得出结论
 * */
function includeArray (list1, list2) {
  let status = false;
  list2.forEach(item => {
    if (list1.includes(item)) status = true;
  });
  return status;
}

export { includeArray };
