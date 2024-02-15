# `scope` Submodule <a name="`scope` Submodule" id="@cdktf/provider-boundary.scope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Scope <a name="Scope" id="@cdktf/provider-boundary.scope.Scope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope boundary_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.scope.Scope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.Scope;

Scope.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .autoCreateAdminRole(java.lang.Boolean)
//  .autoCreateAdminRole(IResolvable)
//  .autoCreateDefaultRole(java.lang.Boolean)
//  .autoCreateDefaultRole(IResolvable)
//  .description(java.lang.String)
//  .globalScope(java.lang.Boolean)
//  .globalScope(IResolvable)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID containing the sub scope resource. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.autoCreateAdminRole">autoCreateAdminRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives permissions to manage the scope to the provider's user. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.autoCreateDefaultRole">autoCreateDefaultRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only relevant when creating an org scope. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The scope description. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.globalScope">globalScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that the scope containing this value is the global scope, which triggers some specialized behavior to allow it to be imported and managed. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The scope name. Defaults to the resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope ID containing the sub scope resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#scope_id Scope#scope_id}

---

##### `autoCreateAdminRole`<sup>Optional</sup> <a name="autoCreateAdminRole" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.autoCreateAdminRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives permissions to manage the scope to the provider's user.

Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#auto_create_admin_role Scope#auto_create_admin_role}

---

##### `autoCreateDefaultRole`<sup>Optional</sup> <a name="autoCreateDefaultRole" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.autoCreateDefaultRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only relevant when creating an org scope.

If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives listing of scopes and auth methods and the ability to authenticate to the anonymous user. Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#auto_create_default_role Scope#auto_create_default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The scope description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#description Scope#description}

---

##### `globalScope`<sup>Optional</sup> <a name="globalScope" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.globalScope"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that the scope containing this value is the global scope, which triggers some specialized behavior to allow it to be imported and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#global_scope Scope#global_scope}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.scope.Scope.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The scope name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#name Scope#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetAutoCreateAdminRole">resetAutoCreateAdminRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetAutoCreateDefaultRole">resetAutoCreateDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetGlobalScope">resetGlobalScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.scope.Scope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.scope.Scope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.scope.Scope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.scope.Scope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.scope.Scope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.scope.Scope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.scope.Scope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.scope.Scope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.scope.Scope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.scope.Scope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.scope.Scope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.scope.Scope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.scope.Scope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.scope.Scope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.scope.Scope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.scope.Scope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.scope.Scope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.scope.Scope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.scope.Scope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.scope.Scope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.scope.Scope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.scope.Scope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.scope.Scope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.scope.Scope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.scope.Scope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.scope.Scope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.scope.Scope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.scope.Scope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.scope.Scope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.scope.Scope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.scope.Scope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoCreateAdminRole` <a name="resetAutoCreateAdminRole" id="@cdktf/provider-boundary.scope.Scope.resetAutoCreateAdminRole"></a>

```java
public void resetAutoCreateAdminRole()
```

##### `resetAutoCreateDefaultRole` <a name="resetAutoCreateDefaultRole" id="@cdktf/provider-boundary.scope.Scope.resetAutoCreateDefaultRole"></a>

```java
public void resetAutoCreateDefaultRole()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.scope.Scope.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobalScope` <a name="resetGlobalScope" id="@cdktf/provider-boundary.scope.Scope.resetGlobalScope"></a>

```java
public void resetGlobalScope()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.scope.Scope.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Scope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.scope.Scope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.Scope;

Scope.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.scope.Scope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.scope.Scope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.Scope;

Scope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.scope.Scope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.scope.Scope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.Scope;

Scope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.scope.Scope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.scope.Scope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.Scope;

Scope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Scope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Scope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.scope.Scope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.scope.Scope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Scope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.scope.Scope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Scope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.scope.Scope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Scope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.autoCreateAdminRoleInput">autoCreateAdminRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.autoCreateDefaultRoleInput">autoCreateDefaultRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.globalScopeInput">globalScopeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.autoCreateAdminRole">autoCreateAdminRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.autoCreateDefaultRole">autoCreateDefaultRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.globalScope">globalScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.scope.Scope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.scope.Scope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.scope.Scope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.scope.Scope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.scope.Scope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.scope.Scope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.scope.Scope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.scope.Scope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.scope.Scope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.scope.Scope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.scope.Scope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.scope.Scope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.scope.Scope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.scope.Scope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.scope.Scope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `autoCreateAdminRoleInput`<sup>Optional</sup> <a name="autoCreateAdminRoleInput" id="@cdktf/provider-boundary.scope.Scope.property.autoCreateAdminRoleInput"></a>

```java
public java.lang.Object getAutoCreateAdminRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoCreateDefaultRoleInput`<sup>Optional</sup> <a name="autoCreateDefaultRoleInput" id="@cdktf/provider-boundary.scope.Scope.property.autoCreateDefaultRoleInput"></a>

```java
public java.lang.Object getAutoCreateDefaultRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.scope.Scope.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalScopeInput`<sup>Optional</sup> <a name="globalScopeInput" id="@cdktf/provider-boundary.scope.Scope.property.globalScopeInput"></a>

```java
public java.lang.Object getGlobalScopeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.scope.Scope.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.scope.Scope.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `autoCreateAdminRole`<sup>Required</sup> <a name="autoCreateAdminRole" id="@cdktf/provider-boundary.scope.Scope.property.autoCreateAdminRole"></a>

```java
public java.lang.Object getAutoCreateAdminRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoCreateDefaultRole`<sup>Required</sup> <a name="autoCreateDefaultRole" id="@cdktf/provider-boundary.scope.Scope.property.autoCreateDefaultRole"></a>

```java
public java.lang.Object getAutoCreateDefaultRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.scope.Scope.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalScope`<sup>Required</sup> <a name="globalScope" id="@cdktf/provider-boundary.scope.Scope.property.globalScope"></a>

```java
public java.lang.Object getGlobalScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.scope.Scope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.scope.Scope.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.Scope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.scope.Scope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ScopeConfig <a name="ScopeConfig" id="@cdktf/provider-boundary.scope.ScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.scope.ScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.scope.ScopeConfig;

ScopeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .autoCreateAdminRole(java.lang.Boolean)
//  .autoCreateAdminRole(IResolvable)
//  .autoCreateDefaultRole(java.lang.Boolean)
//  .autoCreateDefaultRole(IResolvable)
//  .description(java.lang.String)
//  .globalScope(java.lang.Boolean)
//  .globalScope(IResolvable)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID containing the sub scope resource. |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.autoCreateAdminRole">autoCreateAdminRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives permissions to manage the scope to the provider's user. |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.autoCreateDefaultRole">autoCreateDefaultRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only relevant when creating an org scope. |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.description">description</a></code> | <code>java.lang.String</code> | The scope description. |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.globalScope">globalScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that the scope containing this value is the global scope, which triggers some specialized behavior to allow it to be imported and managed. |
| <code><a href="#@cdktf/provider-boundary.scope.ScopeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The scope name. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.scope.ScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.scope.ScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.scope.ScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.scope.ScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.scope.ScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.scope.ScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.scope.ScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.scope.ScopeConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope ID containing the sub scope resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#scope_id Scope#scope_id}

---

##### `autoCreateAdminRole`<sup>Optional</sup> <a name="autoCreateAdminRole" id="@cdktf/provider-boundary.scope.ScopeConfig.property.autoCreateAdminRole"></a>

```java
public java.lang.Object getAutoCreateAdminRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives permissions to manage the scope to the provider's user.

Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#auto_create_admin_role Scope#auto_create_admin_role}

---

##### `autoCreateDefaultRole`<sup>Optional</sup> <a name="autoCreateDefaultRole" id="@cdktf/provider-boundary.scope.ScopeConfig.property.autoCreateDefaultRole"></a>

```java
public java.lang.Object getAutoCreateDefaultRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only relevant when creating an org scope.

If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives listing of scopes and auth methods and the ability to authenticate to the anonymous user. Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#auto_create_default_role Scope#auto_create_default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.scope.ScopeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The scope description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#description Scope#description}

---

##### `globalScope`<sup>Optional</sup> <a name="globalScope" id="@cdktf/provider-boundary.scope.ScopeConfig.property.globalScope"></a>

```java
public java.lang.Object getGlobalScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that the scope containing this value is the global scope, which triggers some specialized behavior to allow it to be imported and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#global_scope Scope#global_scope}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.scope.ScopeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The scope name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/scope#name Scope#name}

---



